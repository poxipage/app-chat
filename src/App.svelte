<script lang="ts">
  import { getMessages } from "./state";
  const messages = getMessages();

  let textFieldValue = "";

  const keyDown = (event: any) => {
    if (event.key === "Enter") {
      messages.push(textFieldValue);
      textFieldValue = "";
    }
  };
</script>

<input bind:value={textFieldValue} on:keydown={keyDown} />

{#each $messages.reverse() as message}
  <p>{message}</p>
{/each}

<style>
  /*Use normal css if you don't want to use Tailwindcss and/or DaisyUI.*/
  input {
    @apply input input-primary text-base-content input-lg w-full my-4 scale-95;
  }

  p {
    @apply p-4 m-3 bg-primary text-primary-content  rounded-xl;
  }
</style>
