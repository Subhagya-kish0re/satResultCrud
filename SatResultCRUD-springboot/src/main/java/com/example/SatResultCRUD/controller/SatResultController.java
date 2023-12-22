package com.example.SatResultCRUD.controller;

import com.example.SatResultCRUD.model.SatResult;
import com.example.SatResultCRUD.service.SatResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(
        origins = {
                "http://localhost:3000",
        },
        methods = {
                RequestMethod.OPTIONS,
                RequestMethod.GET,
                RequestMethod.PUT,
                RequestMethod.DELETE,
                RequestMethod.POST
        })
@RestController
@RequestMapping("/api/satresults")
public class SatResultController {

    @Autowired
    private SatResultService satResultService;

    @GetMapping("/test")
    public String test(){
        return "Success";
    }

    @GetMapping("/all")
    public List<SatResult> getAllSatResults() {
        return satResultService.getAllSatResults();
    }


    @GetMapping("/{name}")
    public SatResult getSatResultByName(@PathVariable String name) {
        SatResult satResult=satResultService.getSatResultByName(name);
        if(satResult==null){
            return null;
        }else {
            return satResult;
        }
    }

    @PostMapping("/insert")
    public SatResult insertSatResult(@RequestBody SatResult satResult) {
        SatResult result=satResultService.getSatResultByName(satResult.getName());

        if(result.getName()==null){
            return satResultService.insertOrUpdateSatResult(satResult);
        }else {
            return null;
        }
    }

    @PutMapping("/update/{name}/{newSatScore}")
    public void updateSatScore(@PathVariable String name, @PathVariable int newSatScore) {
        satResultService.updateSatScore(name, newSatScore);
    }

    @DeleteMapping("/delete/{name}")
    public void deleteSatResult(@PathVariable String name) {
        satResultService.deleteSatResultByName(name);
    }
    @GetMapping("/rank/{name}")
    public String getRank(@PathVariable String name) {
        int rank = satResultService.getRank(name);
        return (rank != -1) ? "Rank: " + rank : "Candidate not found";
    }

    @GetMapping("/ranklist")
    public List<SatResult> getRankList() {
        return satResultService.getRankList();
    }
}
