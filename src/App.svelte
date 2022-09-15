<script lang="ts">
  import { getState } from "./state";
  const state = getState();
</script>

<div class="h-full w-full flex justify-center items-center">
  <button
    class="btn btn-primary"
    on:click={() => {
      $state.count += 1;
    }}
  >
    {$state.count}
  </button>
</div>
