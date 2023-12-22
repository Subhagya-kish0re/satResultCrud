package com.example.SatResultCRUD.service;

import com.example.SatResultCRUD.model.SatResult;
import com.example.SatResultCRUD.repository.SatResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SatResultServiceImpl implements SatResultService{

    @Autowired
    private SatResultRepository repository;

    public SatResultServiceImpl(SatResultRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<SatResult> getAllSatResults() {
        return repository.findAll();
    }

    @Override
    public SatResult getSatResultByName(String name) {
        Optional<SatResult> optionalSatResult=repository.findById(name);
        if(optionalSatResult.isPresent()){
            return optionalSatResult.get();
        }else {
            return new SatResult();
        }
    }

    @Override
    public void updateSatScore(String name, int newSatScore) {
        Optional<SatResult> optionalSatResult = repository.findById(name);
        optionalSatResult.ifPresent(satResult -> {
            satResult.setSatScore(newSatScore);
            repository.save(satResult);
        });

    }

    @Override
    public void deleteSatResultByName(String name) {
        repository.deleteById(name);
    }

    @Override
    public SatResult insertOrUpdateSatResult(SatResult satResult) {
        SatResult newSatResult=new SatResult(satResult.getName(),satResult.getAddress(),satResult.getCity(),satResult.getCountry(),satResult.getPincode(),satResult.getSatScore());
        satResult.setPassed(satResult.getSatScore() > 30);
        return  repository.save(satResult);

    }

    @Override
    public String calculatePassFail(String name) {
        Optional<SatResult> optionalSatResult = repository.findById(name);
        return optionalSatResult.map(satResult -> satResult.getPassed() ? "Pass" : "Fail").orElse("Candidate not found");
    }


    @Override
    public int getRank(String name) {
        List<SatResult> allResults = repository.findAll();
        allResults.sort((r1, r2) -> Integer.compare(r2.getSatScore(), r1.getSatScore()));
        for (int i = 0; i < allResults.size(); i++) {
            if (allResults.get(i).getName().equals(name)) {
                return i + 1;
            }
        }
        return -1;
    }

    public List<SatResult> getRankList() {
        List<SatResult> allResults = repository.findAll();
        return allResults.stream()
                .sorted(Comparator.comparingInt(SatResult::getSatScore).reversed())
                .collect(Collectors.toList());
    }
}
