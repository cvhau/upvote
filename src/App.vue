<template>
  <div id="app">
    <h2 class="title has-text-centered dividing-header">UpVote!</h2>
    <div class="section">
      <article v-for="submission in sortedSubmissions" :key="submission.id" class="media" v-bind:class="{'blue-border': submission.votes >= 20}">
        <figure class="media-left">
          <img class="image is-64x64" :src="submission.submissionImage">
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>
                <a :href="submission.url" class="has-text-info">{{ submission.title }}</a>
                <span class="tag is-small">#{{ submission.id }}</span>
              </strong>
              <br>
                {{ submission.description }}
              <br>
              <small class="is-size-7">
                Submitted by:
                <img class="image is-24x24" :src="submission.avatar">
              </small>
            </p>
          </div>
        </div>
        <div class="media-right">
          <span class="icon is-small" v-on:click="upvote(submission.id)">
            <i class="fa fa-chevron-up"></i>
            <strong class="has-text-info">{{ submission.votes }}</strong>
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { submissions } from './seed';

export default {
  name: 'App',
  data () {
    return {
      submissions: submissions
    };
  },
  computed: {
    sortedSubmissions () {
      // return this.submissions.sort((a, b) => {
      //   return b.votes - a.votes;
      // });
      // Error: Unexpected side effect in "sortedSubmissions" computed property.
      // => You should not edit other data in computed, you should use watch or
      //    modify a copy of data instead.

      // Modify a copy of submissions data:
      return [...this.submissions].sort((a, b) => {
        return b.votes - a.votes;
      });
    }
  },
  methods: {
    upvote (submissionId) {
      const submission = this.submissions.find((submission) => {
        return submission.id === submissionId;
      });
      submission.votes++;
    }
  }
}
</script>

<style lang="sass"></style>
