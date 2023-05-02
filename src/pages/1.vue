<template>
  <div class=" pages">
  <q-page class="column page-content">
    <q-dialog v-model="inception">
      <q-card>
        <q-icon name="search" style="position: relative; right: 50px;"/>
        <q-card-section>
          <div class="text-h6" ><q-icon name="search" class="modal-icon"/>Add Misify</div>
        </q-card-section>
        <div v-if="nexton==1">
          <q-card-section class="q-pt-none">
            Name
            <q-card-actions></q-card-actions>
            <q-input filled v-model="text" label="Filled" />
          </q-card-section>
          <q-card-section class="q-pt-none">
            Limit
          </q-card-section>
          <q-card-actions>
            <q-input filled v-model="text" label="Filled" /><q-select filled v-model="model" :options="modaloptions" label="Filled" />
          </q-card-actions>
          <q-card-actions align="right">
            <q-btn label="Next"  @click="secondDialog" class="card-next"/>
          </q-card-actions>
        </div>
        <div v-else-if="nexton==2">
          <q-card-section>
            <div class="text-h6">Persistent</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            Click/Tap on the backdrop.
          </q-card-section>
          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn ref="Dialog"  @click="secondDialog" class="card-next" label="Done" />
          </q-card-actions>
        </div>
      </q-card>
    </q-dialog>
    <div class="row justify-between" style="border-bottom: solid 1px #F3F3F5;">
      <div  >
        <input type="search" class="search" placeholder="Search" style="border:none;padding-left: 20px;">
        <q-icon name="search" style="position: relative; right: 50px;"/>
      </div>
      <div class="row">
        <q-btn round no-outline icon="mdi-bell-outline" class="bell-notification" >
          <q-badge floating color="#4EFDEA" rounded style="position: absolute;right: 5px;top:5px">4</q-badge>
        </q-btn>
        <select name="" id="" style="border-radius: 5px;height: 40px; width: 130px;border-color: #F5F5F5; padding-left: 10px;margin-top: 10px;margin-right: 10px;">
          <option>
            Brand Shop
          </option>
          <option>
            Facebook
          </option>
          <option>
            Twitter
          </option>
          <option>
            Oracle
          </option>
        </select>
      </div>
    </div>
    <div class="column">
      <div class="row justify-between">
        <h5 class="page-name" >Midsify</h5>
        <div class="mytooltip">
          <div style="">Reserve 160 Days <span style="position: relative;left: 45%;">50K</span></div>
          <div style="width: 20%;"><q-linear-progress class="sumupprogress" size="25px" :value="sumupprogress" /></div>
          <div class="mytext"><div class="sumup-text-up">Release estimate <p class="sumup-text-down">March 4, 2023</p></div></div>
        </div>
        <div>
          <q-btn color="blue" @click="inception=true" icon="add_circle_outline" label="Add"  class="addmidsify"/>
        </div>
      </div>
      <div class="row">
        <q-table
          class="my-sticky-virtscroll-table w-100"
          virtual-scroll
          flat bordered
          v-model:pagination="pagination"
          :rows-per-page-options="[0]"
          :virtual-scroll-sticky-size-start="48"
          row-key="name"
          :rows="rows"
          :columns="columns"
          hide-bottom
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="name" align="center" :props="props">
                {{ props.row.name }}
              </q-td>
              <q-td key="progress" :props="props" >
                <div>
                  <!-- {{ props.row.progress }} -->
                  <div class="tooltip">
                    <q-linear-progress style="width: 200px; " size="25px" :value= props.row.progress  color="accent">
                      <div class="absolute-full flex flex-center">
                        <q-badge color="white" text-color="accent" :label="progressLabel1"/>
                      </div>
                    </q-linear-progress>
                    <p class="tooltiptext"  :style="{backgroundColor:'red', marginLeft:props.row.progress*100+'%'}">Tooltip text<br><span>2K/15K</span></p>
                  </div>
                </div>
                <div class="my-table-details">
                  {{ props.row.details }}
                </div>
              </q-td>
              <q-td key="reserve" :props="props">
                {{ props.row.reserve }}
              </q-td>
              <q-td key="status" :props="props">
                <div v-if="props.row.status==1">
                  <q-btn class="Live" >
                    <i class="q-icon notranslate material-icons Liveicon" aria-hidden="true" role="presentation" style="font-size: 5px;color:red">circle-small</i>Live
                  </q-btn>
                </div>
                <div v-if="props.row.status==2">
                  <q-btn class="Next" >
                    <i class="q-icon notranslate material-icons Liveicon" aria-hidden="true" role="presentation" style="font-size: 5px;color:blue">circle-small</i>Next
                  </q-btn>
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
const columns = [
  { name: 'progress', align: 'left', label: 'Name', field: 'name', sortable: true },
  { name: 'name', required: true, label: 'Progress', align: 'left', field: row => row.progress, format: val => `${val}`, sortable: true },
  { name: 'status', align: 'left', label: 'Reserve', field: 'status', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'reserve', align: 'left', label: 'Status', field: 'reserve', sortable: true }
]

const rows = [
  {
    name: 'Maverick',
    progress: 0.52,
    reserve: '$25k',
    status: 1
  },
  {
    name: 'CMS',
    progress: 0.75,
    reserve: '$100k',
    status: 2
  },
  {
    name: 'CMS',
    progress: 0.20,
    reserve: 'For 5 days',
    status: 0
  },
  {
    name: 'Maverick',
    progress: 0.85,
    reserve: '15k per Transaction',
    status: 0
  }
]

export default {

  setup () {
    // const subpropos= ref("33%")
    const progress1 = ref(0.1)
    const sumupprogress = ref(0.1)
    return {
      columns,
      inception: ref(false),
      // secondDialog: ref(false),
      rows,
      model: ref(null),
      sumupprogress,
      // subpropos,
      progress1,
      progressLabel1: computed(() => (progress1.value * 100) + '%'),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      modaloptions: [
        'Days', 'Transaction', 'Volume'
      ]
    }
  },
  data () {
    return {
      nexton: 1
    }
  },
  methods: {
    secondDialog: function (event) {
      if (this.nexton === 0) this.nexton = 1
      else if (this.nexton === 1) this.nexton = 2
      else if (this.nexton === 2) { this.nexton = 1; this.inception = false }
      // console.log(this.nexton)
    }
  }

}

</script>
<style>
.mytooltip .mytext {
  display: flex;
  align-items: center;
    visibility: show;
    width: 140px;
    /* background-color: blue; */
    color: #fff;
    z-index: 1;
    bottom: 100%;
    /* left: 33%; */
    left:v-bind((sumupprogress * 100-28) + '%');
    /* left:v-bind(sumupprogress*100); */
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    background-color: white;
    box-shadow: 0px 15px 40px rgba(22, 8, 49, 0.1);

}
.mytooltip {
    position: relative;
    display: inline-block;
    margin-top: 50px;
}
.mytooltip .mytext:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 7px;
    border-style: solid;
    border-color: rgb(255, 255, 255) transparent transparent transparent;
}
.mytooltip:hover .mytext {
    visibility: visible;
}
.pages{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page-content{
  /* border: solid 2px black; */
  width: 95%;
}
.sumup-text-up{
  position:relative;
  left: 20%;
  top:10px;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #84849A;
}
.sumup-text-down{
  text-align: center;
  color: #84849A;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: small;
  line-height: 18px;
  color: #4B4E68;
}
.q-btn .q-icon, .q-btn .q-spinner{
    font-size: none;
}
.bell-notification{
  margin-top: 10px;
  margin-right: 10px;
  font-size: 20px;
  /* box-shadow: none; */
}
.page-name{
  font-weight:bold;
  margin-left: 20px;
}
.sumupprogress{
  /* color:red; */
  /* color: linear-gradient(90deg, #4EFDEA 6.67%, #5766FF 92.08%); */
  /* background: -webkit-linear-gradient(#eee, #333); */
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  width: 250px;
  border-radius: 4px;
  height: 12px;
}
.Live{
  color:red;

}
.Next{
  color:blue;
}
.q-btn:before{
  box-shadow:none;
}
.addmidsify{
  margin-top: 20px;
  margin-right: 20px;
  width: 100px;
  border-radius: 10px;
}
.modal-icon{
  position: relative;
  right: 50px;
}
.card-next{
  margin-top: 20px;
  margin-right: 20px;
  width: 100px;
  border-radius: 10px;
  background: linear-gradient(90deg, #4EFDEA 6.67%, #7581FF 92.08%);
  border-radius: 9px;
}
.my-table-details {
  font-size: 0.85em;
  font-style: italic;
  max-width: 200px;
  white-space: normal;
  color: #555;
  margin-top: 4px;
}
.search{
  background-color: #F3F3F5;
  margin: 20px 20px 20px;
  width: 300px;
  height: 30px;
  border-radius: 5px;
}
.cursor-pointer{
  height: 30px;
}
.tooltip .tooltiptext {
  /* visibility: show; */
  margin-top: 100px;
  width: 120px;
  background-color: white;
  box-shadow: 0px 15px 40px rgba(22, 8, 49, 0.1);
  border-color:rgb(230, 58, 58);
  margin-top: 5px;
  color: #4B4E68;
  text-align: center;
  border-radius: 4px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 70%;
  left: v-bind(progressLabel1);
  margin-left: -9%;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: white transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
.tooltip {
  position: relative;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 15px 40px rgba(22, 8, 49, 0.1);
  display: inline-block;

}
</style>
<style lang="sass">
.my-sticky-virtscroll-table
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #4EFDEA

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
