<script>
import data from "./data.json";
import Tree from "../MainComponents/Tree.vue";
export default {
  data() {
    return {
      nodes: data,
      selectedKeys3: null,
      expandedKeys: {},
    };
  }
,
  props: {},
  components: {
    Tree,
  },
  methods: {
    expandAll() {
      for (let node of this.nodes) {
        this.expandNode(node);
      }

      this.expandedKeys = { ...this.expandedKeys };
    },
    collapseAll() {
      this.expandedKeys = {};
    },
    expandNode(node) {
      this.expandedKeys[node.key] = true;
      if (node.children && node.children.length) {
        for (let child of node.children) {
          this.expandNode(child);
        }
      }
    },
  },
};
</script>

<template>

  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h2>Tree</h2>

        <div class="flex flex-wrap gap-2 mb-4 justify-content-center">
          <Button
          class="transition-colors transition-duration-500 bg-blue-500 hover:bg-gray-200 text-white hover:text-gray-900
    flex align-items-center justify-content-center border-none font-bold border-round cursor-pointer m-2 w-2 py-3 p-button p-component"
            type="button"
            icon="pi pi-plus"
            label="Expand All"
            @click="expandAll"
            >
            <span class="pi pi-plus p-button-icon p-button-icon-left"></span>
            <span class="p-button-label">Expand All</span>
            </Button
          >
          <Button
          class="transition-colors transition-duration-500 bg-blue-500 hover:bg-gray-200 text-white hover:text-gray-900
    flex align-items-center justify-content-center border-none font-bold border-round cursor-pointer m-2 w-2 py-3 p-button p-componen"
            type="button"
            icon="pi pi-minus"
            label="Collapse All"
            @click="collapseAll"
            ><span class="pi pi-minus p-button-icon p-button-icon-left"></span>
            <span class="p-button-label">Collapse All</span></Button
          >
        </div>

        <Tree
          :value="nodes"
          selectionMode="single"
          v-model:selectionKeys="selectedKeys3"
          v-model:expandedKeys="expandedKeys"
          scrollHeight="200px"
          :filter="true"
          filterMode="strict"
          @expandNode="expandNode"
          @collapseAll="collapseAll"
        >
        </Tree>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* .grid {
  position: relative;
}  */
body {
  background-color: var(--surface-ground);
  font-family: var(--font-family);
  font-weight: normal;
  color: var(--text-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0.5em;
  margin-bottom: 50px;
  font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 1.5rem 0 1rem 0;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.2;
  color: inherit;
}

h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.25rem;
}
h6 {
  font-size: 1rem;
}
p {
  line-height: 1.5;
  margin: 0 0 1rem 0;
}

.card {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@keyframes pulse {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}

.customer-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
}

.customer-badge.status-qualified {
  background-color: #c8e6c9;
  color: #256029;
}

.customer-badge.status-unqualified {
  background-color: #ffcdd2;
  color: #c63737;
}

.customer-badge.status-negotiation {
  background-color: #feedaf;
  color: #8a5340;
}

.customer-badge.status-new {
  background-color: #b3e5fc;
  color: #23547b;
}

.customer-badge.status-renewal {
  background-color: #eccfff;
  color: #694382;
}

.customer-badge.status-proposal {
  background-color: #ffd8b2;
  color: #805b36;
}

.product-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
}

.product-badge.status-instock {
  background: #c8e6c9;
  color: #256029;
}

.product-badge.status-outofstock {
  background: #ffcdd2;
  color: #c63737;
}

.product-badge.status-lowstock {
  background: #feedaf;
  color: #8a5340;
}

.order-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
}

.order-badge.order-delivered {
  background: #c8e6c9;
  color: #256029;
}

.order-badge.order-cancelled {
  background: #ffcdd2;
  color: #c63737;
}

.order-badge.order-pending {
  background: #feedaf;
  color: #8a5340;
}

.order-badge.order-returned {
  background: #eccfff;
  color: #694382;
}

.image-text {
  margin-left: 0.5rem;
}

.p-multiselect-representative-option {
  display: inline-block;
  vertical-align: middle;
}

.p-multiselect-representative-option img {
  vertical-align: middle;
  width: 24px;
}

.p-multiselect-representative-option span {
  margin-top: 0.125rem;
}

.country-item {
  display: flex;
  align-items: center;
}

.country-item img.flag {
  width: 18px;
  margin-right: 0.5rem;
}

.flag {
  vertical-align: middle;
}

span.flag {
  width: 44px;
  height: 30px;
  display: inline-block;
}

img.flag {
  width: 30px;
}

.true-icon {
  color: #256029;
}

.false-icon {
  color: #c63737;
}
</style>
