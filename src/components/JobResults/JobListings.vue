<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <div v-if="displayedJobs.length === 0">
      <h1>No Jobs found</h1>
    </div>
    <ol v-else>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, computed } from "vue";
import JobListing from "@/components/JobResults/JobListing.vue";
import { useFilteredJobs, useFetchJobsDispatch } from "@/store/composables";
import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";

onMounted(useFetchJobsDispatch);
const filteredJobs = useFilteredJobs();
const currentPage = useCurrentPage();
const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));
const { previousPage, nextPage } = usePreviousAndNextPages(
  currentPage,
  maxPage
);
const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1) * 10;
  const lastJobIndex = pageNumber * 10;
  return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
});
</script>
