package com.example.SatResultCRUD.service;

import com.example.SatResultCRUD.model.SatResult;

import java.util.List;

public interface SatResultService {
    List<SatResult> getAllSatResults();

    SatResult getSatResultByName(String name);

    void updateSatScore(String name, int newSatScore);
    void deleteSatResultByName(String name);
    SatResult insertOrUpdateSatResult(SatResult satResult);
    String calculatePassFail(String name);

    int getRank(String name);
    List<SatResult> getRankList();

}
