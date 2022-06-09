<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>
      <accordion header="Degree" />
      <!-- <job-filters-sidebar-job-types />
      <job-filters-sidebar-organizations /> -->
      <job-filters-sidebar-checkbox-group
        header="Job Types"
        :mutation="ADD_SELECTED_JOB_TYPES"
        :unique-values="uniqueJobTypes"
      />
      <job-filters-sidebar-checkbox-group
        header="Organizations"
        :mutation="ADD_SELECTED_ORGANIZATIONS"
        :unique-values="uniqueOrganizations"
      />
    </section>
  </div>
</template>

<script setup>
// import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";
// import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion";
import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";
import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
} from "@/store/constants";

const uniqueJobTypes = useUniqueJobTypes();
const uniqueOrganizations = useUniqueOrganizations();
</script>
