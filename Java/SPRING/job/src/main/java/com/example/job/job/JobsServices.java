package com.example.job.job;

import java.util.List;

public interface JobsServices {
    List<Job> findAll();
    void createJob(Job job);

    Job getJob(Long id);
    void deleteJob(Long id);

    void updateJob(Long id, Job job);
}
