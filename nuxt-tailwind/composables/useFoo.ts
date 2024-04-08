// <script setup lang="ts">
// const foo = useFoo()
// </script>

// <template>
//   <div>
//     {{ foo }}
//   </div>
// </template>

export const useFoo = () => {
  return useState('foo', () => 'bar')
}
// export const useMyComposable = () => {
//   // Because your composable is called in the right place in the lifecycle,
//   // useRuntimeConfig will work here
//   const config = useRuntimeConfig()

//   // ...
// }
