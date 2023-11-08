<template>
    <div class="bodyJornal">
        <header>
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
                <path fill="#000000"
                    d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4v-1.9l10-10V8l-6-6H6m7 1.5L18.5 9H13V3.5m7.1 9.5c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-2 1.8L12 20.9V23h2.1l6.1-6.1l-2.1-2.1Z" />
            </svg>
            <h2>My journal</h2>
        </header>
        <main>
            <form action="">
                <textarea name="" id="" cols="30" rows="10" v-model="journalText" maxlength="280" placeholder="New Journal Entry for danielkelly_io"></textarea> <br>
                <emotes/>
                <div>
                    <p>{{ journalText.length }} / 280</p>
                </div>
                <button @click="add" class="submit">
                    <p>Remember</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#333333" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>
                </button>
            </form>
            <hr>
            <div v-for="post in posts" >
                <post :journalText="post.journalText" :date="post.journalDate"/>
            </div>
        </main>
    </div>
</template>
<script lang="ts" setup>
import emotes from '@/components/emotes.vue';
import post from '@/components/post.vue';
import { ref, type Ref } from 'vue';
type Post = {
    journalDate: Date;
    journalText: string;
};
const posts = ref<Array<Post>>([]);
let journalDate: Ref<Date> 
const journalText: Ref<string> = ref("");
const add = (e:Event) => {
    e.preventDefault();
    const post: Post = {
        journalDate: new Date(),
        journalText: journalText.value
  };
    posts.value.push(post)
}


</script>
<style scoped>
header {
    display: flex;
    align-items: center;
}

.bodyJornal {
    display: grid;
}
.submit {
    display: flex;
    background-color:aqua;
    height: 3rem;
    width: 10rem;
}
.submit > svg {
    width: 100%;
}
</style>