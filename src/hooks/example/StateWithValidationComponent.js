import useStateWithValidation from "../useStateWithValidation"

export default function StateWithValidationComponent() {
  const [username, setUsername, isValid] = useStateWithValidation(
    name => {
      const min = name.length > 5;
      const genap = name.length % 2 === 0;

      return min && genap;
    },
    ""
  )

  return (
    <>
      <div>Valid: {isValid.toString()}</div>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
    </>
  )
}
