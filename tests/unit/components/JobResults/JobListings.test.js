import { shallowMount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    shallowMount(JobListings);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });
  it("created a job listing for each received job", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    shallowMount(JobListings);
    const wrapper = shallowMount(JobListings);
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(15);
  });
});
