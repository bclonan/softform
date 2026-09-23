export const ADAPTER_KEY='softform:adapters';
export class NotificationAdapter { adapt(_payload){throw new Error('Implement adapt(payload) in a concrete adapter.')} }
export class RestNotificationAdapter extends NotificationAdapter {
  adapt(payload){
    if(!payload || !Array.isArray(payload.notifications))throw new Error('REST adapter expects a notifications array.');
    return payload.notifications.map(n=>({id:n.notification_id,type:n.category,title:n.subject,body:n.preview,sender:n.sender?.display_name,time:n.received_at,count:n.unread_count}));
  }
}
export class GraphQLNotificationAdapter extends NotificationAdapter {
  adapt(payload){
    const edges=payload?.data?.inbox?.edges;
    if(!Array.isArray(edges))throw new Error('GraphQL adapter expects data.inbox.edges.');
    return edges.map(e=>{if(!e?.node)throw new Error('Each GraphQL edge must contain a node.');const n=e.node;return{id:n.key,type:String(n.kind).toLowerCase(),title:n.headline,body:n.content,sender:n.author?.name,time:n.displayTime,count:n.unreadCount};});
  }
}
export class LegacyNotificationAdapter extends NotificationAdapter {
  adapt(payload){
    if(!Array.isArray(payload?.records))throw new Error('Legacy adapter expects a records array of tuples.');
    return payload.records.map((row,i)=>{if(!Array.isArray(row)||row.length!==8)throw new Error(`Legacy record ${i+1} must have 8 values.`);const [id,type,title,body,sender,time,count,_revision]=row;return{id,type,title,body,sender,time,count};});
  }
}
export function validateCards(cards){
  if(!Array.isArray(cards))throw new Error('Adapter output must be an array of CardModel objects.');
  const ids=new Set();
  return Object.freeze(cards.map((c,i)=>{
    if(!c || typeof c!=='object')throw new Error(`Card ${i+1} is not an object.`);
    for(const key of ['id','type','title','body','sender','time'])if(typeof c[key]!=='string'||!c[key].trim())throw new Error(`Card ${i+1}: ${key} must be a non-empty string.`);
    if(!['message','call','status'].includes(c.type))throw new Error(`Card ${i+1}: type must be message, call, or status.`);
    if(!Number.isInteger(c.count)||c.count<0)throw new Error(`Card ${i+1}: count must be a non-negative integer.`);
    if(ids.has(c.id))throw new Error(`Duplicate card id: ${c.id}`);
    ids.add(c.id);
    return Object.freeze({id:c.id,type:c.type,title:c.title,body:c.body,sender:c.sender,time:c.time,count:c.count});
  }));
}
export class AdapterRegistry {
  constructor(){this.adapters=new Map()}
  register(name,adapter){if(typeof name!=='string'||!name.trim()||typeof adapter?.adapt!=='function')throw new TypeError('register(name, adapter) requires a name and an adapt(payload) function.');this.adapters.set(name,adapter);return this}
  normalize(name,payload){const adapter=this.adapters.get(name);if(!adapter)throw new Error(`No adapter registered for ${name}.`);return validateCards(adapter.adapt(payload))}
  names(){return [...this.adapters.keys()]}
}
export function createAdapterRegistry(){return new AdapterRegistry().register('rest',new RestNotificationAdapter()).register('graphql',new GraphQLNotificationAdapter()).register('legacy',new LegacyNotificationAdapter())}
export const defaultRegistry=createAdapterRegistry();
