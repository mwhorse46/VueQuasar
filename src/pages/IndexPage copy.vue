<template>
  <q-page class="column">
    <div class="row justify-between">
      <div>
        <q-input rounded outlined v-model="text" label="Label" :dense="dense">
          <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="row">
        <q-btn round no-outline icon="mdi-bell-outline">
          <q-badge floating color="#4EFDEA" rounded >4</q-badge>
        </q-btn>
        <q-select color="teal" outlined v-model="model" :options="options" label="Label">
        </q-select>
      </div>
    </div>

    <div class="column">
      <div class="row justify-between">
        <p>Midsify</p>
        <div>
          <q-btn color="teal" icon="add_circle_outline">
            <div>Add</div>

          </q-btn>
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
        >
            <template v-slot:body-cell-name="props">
            <q-td :props="props" class="relative-position">
              <div>
                <q-linear-progress style="width: 200px; " size="25px" :value="progress1" color="accent">
                  <div class="absolute-full flex flex-center">
                    <q-badge style="height: 100%; " color="white" text-color="accent" :label="progressLabel1" />
                  </div>
                </q-linear-progress>
              </div>
              <div class="my-table-details">
                {{ props.row.details }}
              </div>
              <div class="absolute tooltip-class">
                <p class="tooltip-up" >Total Transaction</p>
                <p class="tooltip-down">2K/15K</p>
              </div>
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, computed } from 'vue'
const columns = [
  { name: 'progress', align: 'center', label: 'Name', field: 'name', sortable: true },
  { name: 'name', required: true, label: 'Progress', align: 'left', field: row => row.progress, format: val => `${val}`, sortable: true },
  { name: 'reserve', align: 'left', label: 'Reserve', field: 'reserve', sortable: true },
  { name: 'status', align: 'center', label: 'Status', field: 'status', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const seed = [
  // {
  //   name: 'Maverick',
  //   progress: 159,
  //   reserve: 6.0,
  //   status: 24
  // },
  // {
  //   name: 'CMS',
  //   progress: 159,
  //   reserve: 6.0,
  //   status: 24
  // },
  // {
  //   name: 'CMS',
  //   progress: 159,
  //   reserve: 6.0,
  //   status: 24
  // },
  {
    name: 'Maverick',
    progress: 159,
    reserve: 6.0,
    status: 24
  }
]

// we generate lots of rows here
let rows = []
for (let i = 0; i < 1; i++) {
  rows = rows.concat(seed.slice(0).map(r => ({ ...r })))
}
rows.forEach((row, index) => {
  row.index = index
})

export default {
  setup () {
    const progress1 = ref(0.1)
    return {
      columns,
      rows,
      model: ref(null),
      progress1,
      progressLabel1: computed(() => (progress1.value * 100) + '%'),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
}

</script>
<style>
.my-table-details {
  font-size: 0.85em;
  font-style: italic;
  max-width: 200px;
  white-space: normal;
  color: #555;
  margin-top: 4px;
}

.tooltip-up{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #84849A;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}
.tooltip-down{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  margin-top: 5px;
  color: #4B4E68;

}

.tooltip-class {
  visibility: show;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  background: #FFFFFF;
  box-shadow: 0px 15px 40px rgba(22, 8, 49, 0.1);
  position: relative;
  display: inline-block;
  z-index: 1;
}

.tooltip-class::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #FFFFFF transparent transparent transparent;
}
</style>
<style lang="sass">
.my-sticky-virtscroll-table
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #00b4ff

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
