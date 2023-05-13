import { useEffect, useRef } from 'react'

function useDependentEffect (effect, dependencies) {
  const initialRenderRef = useRef(true)

  useEffect(() => {
    if (initialRenderRef.current) {
      // Skip running the effect on initial render
      initialRenderRef.current = false
    } else {
      // Run the effect on dependent render
      return effect()
    }
  }, dependencies)
}

export default useDependentEffect
