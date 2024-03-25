<script setup lang="ts">
const props = defineProps<{
  content: string | undefined
}>()

let contentElement: HTMLElement | null

onMounted(() => {
  contentElement = document.querySelector('#post-content');
  if (contentElement && props.content != undefined) {
    contentElement.innerHTML = props.content;

// Find all <img> tags within the HTML content
    let imgTags = contentElement.getElementsByTagName('img');
    // Loop through each <img> tag and apply width if not already set
    for (let i = 0; i < imgTags.length; i++) {
      let img = imgTags[i];
      // Create a new <img> element with srcset, sizes, and other attributes
      let newImg = document.createElement('img');
      if (img != null) {
        newImg.setAttribute('srcset', '/_ipx/w_410&amp;fit_cover/' + img.getAttribute('src') + ' 410w');
        newImg.setAttribute('sizes', '40vw');
        newImg.setAttribute('src', '/_ipx/w_820&amp;fit_cover/' + img.getAttribute('src'));
        newImg.setAttribute('alt', ""); // Preserve the alt attribute
        // Replace the existing <img> tag with the new <img> element
        img.parentNode?.replaceChild(newImg, img);
      }
    }
  }
})


</script>
<template>
  <div id="post-content" class="text-left">
    {{ contentElement }}
  </div>
</template>

<style lang="scss">
#post-content {
  p {
    margin-top: 2rem;
  }

  h2 {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  li {
    list-style: inside;
  }

  img {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
  }
}
</style>