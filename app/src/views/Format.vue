<template>
  <div>
    <h1>&gt; Format</h1>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col>
          <p>id: 196534</p>
          <h2>&gt;&gt; 発注書</h2>
        </v-col>
      </v-row>
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="my-2">
                <v-card
                  outlined
                >
                  <v-card-title>FormatDocument</v-card-title>
                  <img
                    src="../assets/old.png"
                    alt="defaultImage"
                    class="mb-5 document"
                  >
                </v-card>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="my-2">
              <h3>Key Pairs</h3>
              <div id="list">
                <div class="list-head list-col">
                  <div>Key</div>
                  <div>Pair Key</div>
                </div>
                <div class="list-body">
                  <div class="list-col list-row" v-for="row, index in lists" :key="index">
                    <div><input type="text" :value="row.key"></div>
                    <div><input type="text" :value="row.pair"></div>
                  </div>
                </div>
                <div class="list-row" style="text-align:center;">
                  <v-btn
                    variant="outlined"
                    size="small"
                  >
                    &plus; Add Key Pair
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>      
    </v-container>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col>
          <p>id: 196544</p>
          <h2>&gt;&gt; 請求書</h2>
        </v-col>
      </v-row>
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="my-2">
                <v-card
                  outlined
                >
                  <v-card-title>FormatDocument</v-card-title>
                  <img
                    src="../assets/old.png"
                    alt="defaultImage"
                    class="mb-5 document"
                  >
                </v-card>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="my-2">
              <h3>Key Pairs</h3>
              <div id="list">
                <div class="list-head list-col">
                  <div>Key</div>
                  <div>Pair Key</div>
                </div>
                <div class="list-body">
                  <div class="list-col list-row" v-for="row, index in lists" :key="index">
                    <div><input type="text" :value="row.key"></div>
                    <div><input type="text" :value="row.pair"></div>
                  </div>
                </div>
                <div class="list-row" style="text-align:center;">
                  <v-btn
                    variant="outlined"
                    size="small"
                  >
                    &plus; Add Key Pair
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>      
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const lists = ref([
  {
    key: "企業名",
    pair: "company"
  },
  {
    key: "件名",
    pair: "title"
  },
  {
    key: "納期",
    pair: "promise"
  },
  {
    key: "発注日",
    pair: "date"
  },
  {
    key: "発注表",
    pair: "table"
  },
  

])
</script>


<style scoped>
img {
  width: 100%;
}

#list {
  width: 100%;
  margin: 5px;

  border: solid 1px #000;
  border-radius: 5px;
}

.list-col {
  display: grid;
  grid-template-columns: repeat(2, 50%);
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

input[type="text"] {
  border-bottom: solid 2px #000;
  padding-left: 5px;
}
input[type="text"]:focus {
  outline: none;
  border-bottom: solid 2px #a704b3;
}
</style>
