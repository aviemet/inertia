import { useForm } from '@inertiajs/react'

const methodNameTransforms = {
  post: 'bar',
  put: 'baz',
  patch: 'foo',
  delete: 'bar'
}

export default (props) => {
  const form = useForm({ name: 'foo', remember: false }, { transform: (data, method) => {
    return { ...data, name: methodNameTransforms[method]}
  }})

  const postForm = () => {
    form.post('/dump/post')
  }

  const putForm = () => {
    form.put('/dump/put')
  }

  const patchForm = () => {
    form.patch('/dump/patch')
  }

  const deleteForm = () => {
    form.delete('/dump/delete')
  }

  return (
    <div>
      <label>
        Full Name
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => form.setData('name', e.target.value)}
          value={form.name}
        />
      </label>
      <label>
        Remember Me
        <input
          type="checkbox"
          id="remember"
          name="remember"
          onChange={(e) => form.setData('remember', e.target.checked)}
          checked={form.remember}
        />
      </label>

      <button onClick={postForm} className="post">
        POST form
      </button>
      <button onClick={putForm} className="put">
        PUT form
      </button>
      <button onClick={patchForm} className="patch">
        PATCH form
      </button>
      <button onClick={deleteForm} className="delete">
        DELETE form
      </button>
    </div>
  )
}
