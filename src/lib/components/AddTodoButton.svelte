<script lang="ts">
  import { addTodo } from '$lib/stores/todos'
  import { onMount } from 'svelte'
  import AddIcon from './icons/AddIcon.svelte'

  let title = ''
  let description = ''

  let dialog: HTMLDialogElement | null

  onMount(() => {
    dialog = document.getElementById('add_todo_modal') as HTMLDialogElement

    if (!dialog) return
  })

  function openModal() {
    dialog?.showModal()
  }

  function closeModal() {
    dialog?.close()
  }

  function handleSubmit() {
    if (title.length === 0 && description.length === 0) return

    addTodo({ title, description })
    closeModal()
    title = ''
    description = ''
  }
</script>

<button class="fixed bottom-8 right-8 btn btn-primary btn-square text-4xl" on:click={openModal}>
  <AddIcon />
</button>
<dialog id="add_todo_modal" class="modal">
  <div class="modal-box px-16 py-12 max-w-none w-auto">
    <h2 class="text-center font-bold text-3xl mb-8">Add a new To Do</h2>
    <form
      class="flex flex-col gap-2 items-center justify-center"
      on:submit|preventDefault={handleSubmit}
    >
      <input
        class="input input-bordered w-full max-w-xs input-accent"
        bind:value={title}
        type="text"
        placeholder="Title"
      />
      <textarea
        class="textarea textarea-bordered textarea-accent w-full max-w-xs"
        bind:value={description}
        placeholder="Description"
      ></textarea>
      <button class="btn mt-4" type="submit">Add todo</button>
    </form>
  </div>
  <form method="dialog" class="all-screen -z-10">
    <button class="all-screen cursor-default">close button</button>
  </form>
</dialog>
