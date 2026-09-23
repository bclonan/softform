<script>
/** SOFTFORM AGENT NOTE
 * Use for multi-column records. view="cards" keeps the same rows readable in narrow spaces.
 * Search, sort, paging, and loading use the supplied rows without mutating them.
 * Use SfListCard for a short list without columns. See docs/components/SfTable.md.
 */
import { computed, ref, watch } from 'vue';
import SfBadge from './SfBadge.vue';
import SfIcon from './SfIcon.vue';

export default {
  name:'SfTable', components:{SfBadge,SfIcon},
  props:{
    columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},
    caption:{type:String,default:'Recent activity'},view:{type:String,default:'table'},
    searchable:Boolean,searchPlaceholder:{type:String,default:'Search records'},
    pageSize:{type:Number,default:0},loading:Boolean,emptyText:{type:String,default:'No records yet.'},
    rowKey:{type:String,default:'id'},compact:Boolean,
  },
  setup(p){
    const sort=ref(''),asc=ref(true),query=ref(''),page=ref(1);
    const filtered=computed(()=>{
      const q=query.value.trim().toLocaleLowerCase();
      return q ? p.rows.filter(row=>p.columns.some(col=>String(row[col.key]??'').toLocaleLowerCase().includes(q))) : p.rows;
    });
    const sorted=computed(()=>{
      const rows=[...filtered.value];
      if(!sort.value)return rows;
      return rows.sort((a,b)=>{
        const av=a[sort.value],bv=b[sort.value];
        return (typeof av==='number'&&typeof bv==='number' ? av-bv : String(av??'').localeCompare(String(bv??''),undefined,{numeric:true}))*(asc.value?1:-1);
      });
    });
    const pageCount=computed(()=>Math.max(1,Math.ceil(sorted.value.length/Math.max(1,p.pageSize))));
    const currentPage=computed(()=>Math.min(page.value,pageCount.value));
    const visibleRows=computed(()=>p.pageSize>0 ? sorted.value.slice((currentPage.value-1)*p.pageSize,currentPage.value*p.pageSize) : sorted.value);
    watch([query,()=>p.pageSize,()=>p.rows],()=>{page.value=1});
    function sortBy(col){if(col.sortable===false)return;if(sort.value===col.key)asc.value=!asc.value;else{sort.value=col.key;asc.value=true}page.value=1}
    return{sort,asc,query,page,currentPage,pageCount,visibleRows,filtered,sortBy};
  },
};
</script>

<template>
<div class="sf-surface table-shell sf-data-view" :class="{'sf-table-compact':compact}" :aria-busy="loading">
  <div v-if="searchable" class="sf-table-tools"><label>{{searchPlaceholder}}<input type="search" :placeholder="searchPlaceholder" :value="query" @input="query=$event.target.value" /></label><span>{{filtered.length}} records</span></div>
  <div v-if="loading" class="sf-table-loading" role="status">Loading {{caption.toLowerCase() }}…</div>
  <template v-else-if="view==='cards'">
    <div class="sf-table-card-head"><h3>{{caption}}</h3><span>{{visibleRows.length}} shown</span></div>
    <div v-if="visibleRows.length" class="sf-table-cards"><article v-for="(row,index) in visibleRows" :key="row[rowKey]??index" class="sf-table-card"><dl><div v-for="col in columns" :key="col.key"><dt>{{col.label}}</dt><dd><slot :name="'cell-'+col.key" :row="row" :value="row[col.key]"><sf-badge v-if="col.badge" :tone="row[col.key]==='Active'?'accent':'outline'">{{row[col.key]}}</sf-badge><template v-else>{{row[col.key]}}</template></slot></dd></div></dl></article></div>
    <p v-else class="sf-table-empty">{{emptyText}}</p>
  </template>
  <table v-else class="sf-table"><caption>{{caption}}</caption><thead><tr><th v-for="col in columns" :key="col.key" scope="col" :aria-sort="col.sortable===false?undefined:sort===col.key?(asc?'ascending':'descending'):'none'"><button v-if="col.sortable!==false" type="button" @click="sortBy(col)">{{col.label}}<sf-icon :name="sort===col.key?(asc?'up':'down'):'sort'"/></button><span v-else>{{col.label}}</span></th></tr></thead><tbody><tr v-for="(row,index) in visibleRows" :key="row[rowKey]??index"><td v-for="col in columns" :key="col.key"><slot :name="'cell-'+col.key" :row="row" :value="row[col.key]"><sf-badge v-if="col.badge" :tone="row[col.key]==='Active'?'accent':'outline'">{{row[col.key]}}</sf-badge><template v-else>{{row[col.key]}}</template></slot></td></tr><tr v-if="!visibleRows.length"><td :colspan="Math.max(1,columns.length)">{{emptyText}}</td></tr></tbody></table>
  <nav v-if="!loading && pageSize>0 && pageCount>1" class="sf-table-pager" aria-label="Table pages"><button type="button" :disabled="currentPage<=1" @click="page=currentPage-1">Previous</button><span>Page {{currentPage}} of {{pageCount}}</span><button type="button" :disabled="currentPage>=pageCount" @click="page=currentPage+1">Next</button></nav>
</div>
</template>
