package com.example.job.job.impl;

import com.example.job.job.Job;
import com.example.job.job.JobRepository;
import com.example.job.job.JobsServices;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobsServicesImpl implements JobsServices {
//    private List<Job> jobs = new ArrayList<>();
    JobRepository jobRepository;

    public JobsServicesImpl(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Override
    public List<Job> findAll() {
        return jobRepository.findAll();
    }

    @Override
    public void createJob(Job job) {
        jobRepository.save(job);
    }

    @Override
    public Job getJob(Long id) {
        return jobRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteJob(Long id) {
        Job job = getJob(id);
        jobRepository.deleteById(id);
    }

    @Override
    public void updateJob(Long id, Job job) {
        Job oldJob = getJob(id);
        oldJob.setDescription(job.getDescription());
        oldJob.setTitle(job.getTitle());
        oldJob.setMinSalary(job.getMinSalary());
        oldJob.setMaxSalary(job.getMaxSalary());
        oldJob.setLocation(job.getLocation());

        jobRepository.save(oldJob);
    }
}


