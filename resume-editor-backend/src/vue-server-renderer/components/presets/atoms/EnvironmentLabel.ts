import {computed, defineComponent, useAttrs} from 'vue'
import {format} from 'date-fns'

type EnvironmentElement = string | [string, { version?: number | string }?];

export const DateLabel = defineComponent({
  setup() {
    const {element} = useAttrs() as {element: EnvironmentElement};

    const elementName = computed(() => {
      return typeof element === "string" ? element : element[0];
    });

    const elementOptions = computed(() => {
      return typeof element === "string" ? undefined : element[1];
    });
    
    return {elementName, elementOptions}
  },
  template: `
    <div class="inline-block">
      <span>{{ elementName }}</span>
      <template v-if="elementOptions">
        <i v-if="elementOptions.version"> (v{{ elementOptions.version }}) </i>
      </template>
    </div>
    `
})