import type { NextPage } from "next";
import { Center, Stack, Heading } from "@chakra-ui/react";
import { Sandpack } from "@codesandbox/sandpack-react";

const dependencies = {
  "@vue/composition-api": "1.7.0",
};

const code = `<template>
  <main id="app">
    <h1 class="text-3xl font-bold underline">Composition API</h1>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name: "App",
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
`;

const files = {
  "/src/App.vue": code,
};

const Home: NextPage = () => {
  return (
    <Center p={8}>
      <Stack>
        <Center>
          <Heading as="h1">Sandpack Example</Heading>
        </Center>
        <Center
          maxWidth="600px"
          sx={{ ".sp-layout": { flexDirection: "column-reverse" } }}
        >
          <Sandpack
            template="vue"
            theme="dark"
            files={files}
            customSetup={{ dependencies }}
            options={{
              editorHeight: 600,
              editorWidthPercentage: 60,
              showTabs: true,
              closableTabs: true,
              externalResources: [
                "https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css",
              ],
            }}
          />
        </Center>
      </Stack>
    </Center>
  );
};

export default Home;
