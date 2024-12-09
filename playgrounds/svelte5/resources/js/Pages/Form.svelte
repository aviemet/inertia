<script module>
  export { default as layout } from '../Components/Layout.svelte'
</script>

<script>
  import { useForm } from '@inertiajs/svelte'

  let { appName } = $props()

  let form = useForm({
    name: '',
    company: '',
    role: '',
  }, {
    rememberKey: 'NewUser'
  })

  function submit(e) {
    e.preventDefault()
    $form.post('/user')
  }
</script>

<svelte:head>
  <title>Form - {appName}</title>
</svelte:head>

<h1 class="text-3xl">Form</h1>

<form onsubmit={submit} class="max-w-md mt-6 space-y-4">
  {#if $form.isDirty}
    <div class="border-amber-100 bg-amber-50 text-amber-800 p-3 my-5 border rounded">There are unsaved changes!</div>
  {/if}
  <div>
    <label class="block" for="name">Name:</label>
    <input
      type="text"
      bind:value={$form.name}
      id="name"
      class="w-full px-2 py-1 mt-1 border rounded shadow-sm appearance-none"
    />
    {#if $form.errors.name}
      <div class="mt-2 text-sm text-red-600">{$form.errors.name}</div>
    {/if}
  </div>
  <div>
    <label class="block" for="company">Company:</label>
    <input
      type="text"
      bind:value={$form.company}
      id="company"
      class="w-full px-2 py-1 mt-1 border rounded shadow-sm appearance-none"
    />
    {#if $form.errors.company}
      <div class="mt-2 text-sm text-red-600">{$form.errors.company}</div>
    {/if}
  </div>
  <div>
    <label class="block" for="role">Role:</label>
    <select bind:value={$form.role} id="role" class="w-full px-2 py-1 mt-1 border rounded shadow-sm appearance-none">
      <option></option>
      <option>User</option>
      <option>Admin</option>
      <option>Super</option>
    </select>
    {#if $form.errors.role}
      <div class="mt-2 text-sm text-red-600">{$form.errors.role}</div>
    {/if}
  </div>
  <div class="flex gap-4">
    <button type="submit" disabled={$form.processing} class="bg-slate-800 px-6 py-2 text-white rounded">
      Submit
    </button>
    <button type="button" onclick={() => $form.reset()}>Reset</button>
  </div>
</form>
