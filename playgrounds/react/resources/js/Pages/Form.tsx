import { Head, useForm } from '@inertiajs/react'
import Layout from '../Components/Layout'

const Form = () => {
  const form = useForm({
    name: '',
    company: '',
    role: '',
  }, {
    rememberKey: 'NewUser'
  })

  function submit(e) {
    e.preventDefault()
    form.post('/user')
  }

  return (
    <>
      <Head title="Form" />
      <h1 className="text-3xl">Form</h1>
      <form onSubmit={submit} className="max-w-md mt-6 space-y-4">
        {form.isDirty && (
          <div className="border-amber-100 bg-amber-50 text-amber-800 p-3 my-5 border rounded">
            There are unsaved changes!
          </div>
        )}
        <div>
          <label className="block" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            value={form.data.name}
            onChange={(e) => form.setData('name', e.target.value)}
            id="name"
            className="w-full px-2 py-1 mt-1 border rounded shadow-sm appearance-none"
          />
          {form.errors.name && <div className="mt-2 text-sm text-red-600">{form.errors.name}</div>}
        </div>
        <div>
          <label className="block" htmlFor="company">
            Company:
          </label>
          <input
            type="text"
            value={form.data.company}
            onChange={(e) => form.setData('company', e.target.value)}
            id="company"
            className="w-full px-2 py-1 mt-1 border rounded shadow-sm appearance-none"
          />
          {form.errors.company && <div className="mt-2 text-sm text-red-600">{form.errors.company}</div>}
        </div>
        <div>
          <label className="block" htmlFor="role">
            Role:
          </label>
          <select
            value={form.data.role}
            onChange={(e) => form.setData('role', e.target.value)}
            id="role"
            className="w-full px-2 py-1 mt-1 border rounded shadow-sm appearance-none"
          >
            <option></option>
            <option>User</option>
            <option>Admin</option>
            <option>Super</option>
          </select>
          {form.errors.role && <div className="mt-2 text-sm text-red-600">{form.errors.role}</div>}
        </div>
        <div className="flex gap-4">
          <button type="submit" disabled={form.processing} className="bg-slate-800 px-6 py-2 text-white rounded">
            Submit
          </button>
          <button type="button" onClick={() => form.reset()}>
            Reset
          </button>
        </div>
      </form>
    </>
  )
}

Form.layout = (page) => <Layout children={page} />

export default Form
