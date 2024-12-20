package com.example.job.job.impl;

import com.example.job.job.Job;
import com.example.job.job.JobsServices;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobsServicesImpl implements JobsServices {
    private List<Job> jobs = new ArrayList<>();
    private long nextId = 1L;

    @Override
    public List<Job> findAll() {
        return jobs;
    }

    @Override
    public void createJob(Job job) {
        job.setId(nextId++);
        jobs.add(job);
    }

    @Override
    public Job getJob(Long id) {
        for (Job job : jobs) {
            if (job.getId().equals(id)) {
                return job;
            }
        }
        return null;
    }

    @Override
    public void deleteJob(Long id) {
        Job job = getJob(id);
        jobs.remove(job);
    }

    @Override
    public void updateJob(Long id, Job job) {
        Job oldJob = getJob(id);
        oldJob.setDescription(job.getDescription());
        oldJob.setTitle(job.getTitle());
        oldJob.setMinSalary(job.getMinSalary());
        oldJob.setMaxSalary(job.getMaxSalary());
        oldJob.setLocation(job.getLocation());
    }
}


