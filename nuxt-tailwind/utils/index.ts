export * as evn from './env'


// <template>
//   <p>{{ formatNumber(1234) }}</p>
// </template>
export const { format: formatNumber } = Intl.NumberFormat('en-GB', {
  notation: 'compact',
  maximumFractionDigits: 1
})
