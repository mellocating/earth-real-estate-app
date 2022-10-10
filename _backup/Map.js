import { What3wordsAutosuggest } from '@what3words/react-components'

const Map = () => {
    return (
    <What3wordsAutosuggest
      api_key={"3CSK9PZL"}>
      <input
        autoComplete={"on"}
        type={"text"}
      />
    </What3wordsAutosuggest>
  )
}

export default Map;
