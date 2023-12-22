import axios from "axios";

const baseUrl = "http://localhost:8080/api/satresults";

const getAllSatResults = async () => {
  try {
    const response = await axios.get(`${baseUrl}/all`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getSatResultByName = async (name) => {
  try {
    const response = await axios.get(`${baseUrl}/${name}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const insertSatResult = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/insert`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateSatScore = async (name, newSatScore) => {
  try {
    await axios.put(`${baseUrl}/update/${name}/${newSatScore}`);
  } catch (error) {
    throw error;
  }
};

const deleteSatResultByName = async (name) => {
  try {
    await axios.delete(`${baseUrl}/delete/${name}`);
  } catch (error) {
    throw error;
  }
};

const getRank = async (name) => {
  try {
    const response = await axios.get(`${baseUrl}/rank/${name}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getRankList = async () => {
  try {
    const response = await axios.get(`${baseUrl}/ranklist`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const service = {
  getAllSatResults,
  getSatResultByName,
  insertSatResult,
  updateSatScore,
  deleteSatResultByName,
  getRank,
  getRankList,
};

export default service;
