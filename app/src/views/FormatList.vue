<template>
  <div>
    <h1>&gt; Format List</h1>
    <v-divider></v-divider>
    <v-container class="mt-3">
      <v-row>
        <v-col cols="6">
          <div id="list">
            <div class="list-head list-col">
              <div>Action</div>
              <div>Id</div>
              <div>FormatName</div>
            </div>
            <div class="list-body">
              <div class="list-col list-row" v-for="row, index in lists" :key="index">
                <div><input type="checkbox"></div>
                <div>{{ row.id }}</div>
                <div>
                  <router-link :to="'/format/' + row.id">{{ row.name }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title>
              Actions
            </v-card-title>
            <div class="d-flex flex-column">
              <v-btn
                variant="outlined"
                class="my-3 mx-15"
                color="success"
                disabled
              >
                &plus; New Format
              </v-btn>
              <v-btn
                variant="outlined"
                class="my-3 mx-15"
                color="primary"
                disabled
              >
                Config
              </v-btn>
              <v-btn
                variant="outlined"
                class="my-3 mx-15"
                color="error"
                disabled
              >
                Delete
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ApiService from '@/service/apiService';

const lists = ref([])

onMounted(async () => {
  lists.value = (await ApiService.getFormatList()).data.list
})
</script>

<style scoped>
#list {
  width: 100%;
  margin: 5px;

  border: solid 1px #000;
  border-radius: 5px;
}

.list-col {
  display: grid;
  grid-template-columns: 15% 35% 50%;
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

a {
  border-bottom: solid 1px hsla(160, 100%, 37%, 1);
}
</style>
