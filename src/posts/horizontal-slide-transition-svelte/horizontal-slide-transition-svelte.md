---
id: 8BvWz9tB
title: Horizontal slide transitions in Svelte
date: '2023-06-21'
topic: svelte
additionalTags: 
  - 'javascript'
isPublished: true
---

Svelte provides a couple of useful transitions out of the box, but my favourite has always been the slide. In **v3.56**, a horizontal variant was introduced through the `axis` property.

<script>
  import SearchExample from './SearchExample.svelte'
</script>

Here's an example of a searchbar interaction that utilizes it. Click the search icon and start typing:
<SearchExample/>

 The code for this component can be found [here](https://github.com/PaintingWithCode/til/blob/main/src/posts/horizontal-slide-transition-svelte/SearchExample.svelte).
