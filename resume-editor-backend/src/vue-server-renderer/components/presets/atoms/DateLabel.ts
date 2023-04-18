import {computed, defineComponent, useAttrs} from 'vue'
import {format as formatDate} from 'date-fns'

export const DateLabel = defineComponent({
    setup() {
        const {value, format} = useAttrs();
        const dateString = computed(() => {
            if (value) {
                const date = new Date(String(value));

                const formatStr = format ? String(format) : 'yyyy-MM-dd';
                const str = formatDate(date, formatStr)
                return str;

            } else {
                return null;
            }
        });
        return {dateString}
    },
    template: `
      <span>
      {{ dateString }}
      </span>
    `
})