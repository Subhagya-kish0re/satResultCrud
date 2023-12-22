package com.example.SatResultCRUD.model;

import jakarta.persistence.*;


@Entity
@Table(name = "sat_results")
public class SatResult {

    @Id
    private String name;

    private String address;
    private String city;
    private String country;
    private String pincode;
    private int satScore;
    private boolean passed;

    public SatResult() {
    }

    public SatResult(String name, String address, String city, String country, String pincode, int satScore) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.country = country;
        this.pincode = pincode;
        this.satScore = satScore;
        this.passed = satScore > 30;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public int getSatScore() {
        return satScore;
    }

    public void setSatScore(int satScore) {
        this.satScore = satScore;
        this.passed = satScore > 30;
    }

    public boolean getPassed() {
        return passed;
    }

    public void setPassed(boolean passed) {
        this.passed = passed;
    }
}
