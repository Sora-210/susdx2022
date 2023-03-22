<template>
  <div>
    <h1>&gt; FileList</h1>
    <v-divider></v-divider>
    <v-container class="mt-3">
      <v-row>
        <div id="list">
          <div class="list-head list-col">
            <div>Action</div>
            <div>FileName</div>
            <div>Upload Date</div>
            <div>COMPANY Name</div>
            <div>Status</div>
          </div>
          <div class="list-body">
            <div class="list-col list-row" v-for="row, index in lists" :key="index">
              <div><input type="checkbox"></div>
              <div>{{ row.name }}</div>
              <div>{{ row.date }}</div>
              <div>{{ row.company }}</div>
              <div>
                <v-chip
                  size="small"
                  :color="chips[row.status].color"
                  variant="outlined"
                >
                  {{ chips[row.status].text }}
                </v-chip>
              </div>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const chips = ref({
  success: {
    color: "success",
    text: "Success"
  },
  processing: {
    color: "deep-purple accent-4",
    text: "Processing"
  },
  key: {
    color: "warning",
    text: "Key Error"
  },
  company: {
    color: "warning",
    text: "Company Error"
  },
  error: {
    color: "error",
    text: "Error"
  },
})

const lists = ref([
  {
    id: "sdfghjukjmnbvfghj",
    name: "File1",
    date: "2023/01/01",
    company: "XYZ",
    status: "success"
  },
  {
    id: "mnhuikmnbhuikmn",
    name: "File2",
    date: "2023/03/01",
    company: "ABC",
    status: "processing"
  },
  {
    id: "iuygvbnjhgbnj",
    name: "File3",
    date: "2023/03/01",
    company: "Test",
    status: "key"
  },
  {
    id: "iuygvbnjhgbnj",
    name: "File3",
    date: "2023/03/01",
    company: "---",
    status: "company"
  },
  {
    id: "cdrtghjikaloiuyt",
    name: "File4",
    date: "2023/04/01",
    company: "Enter",
    status: "error"
  },
])
</script>

<style>
#list {
  width: 100%;
  margin: 5px;

  border: solid 1px #000;
  border-radius: 5px;
}

.list-col {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  text-align: center;
}

.list-head {
  padding: 5px 0;
  border-bottom: solid 1px #000;
}
.list-head div {
  font-weight: bold;
}

.list-body {
  padding: 5px 0;
}
.list-row {
  padding: 3px 0;
}
</style>
