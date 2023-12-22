package com.example.SatResultCRUD.repository;

import com.example.SatResultCRUD.model.SatResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SatResultRepository extends JpaRepository<SatResult,String> {
}
