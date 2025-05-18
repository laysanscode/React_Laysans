import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CareerTable = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://laysans-solutions-api.onrender.com/career/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const deleteJob = async (id) => {
    try {
      const response = await fetch(`https://laysans-solutions-api.onrender.com/career/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete the job');
      }
      fetchJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const renderLoading = () => {
    return Array.from({ length: 6 }).map((_, i) => (
      <tr key={i}>
        <td colSpan="5" className="text-center">Loading...</td>
      </tr>
    ));
  };

  return (
    <div className="container-fluid content-inner mt-n5 py-0">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Career Datatables</h4>
              </div>
            </div>
            <div className="card-body">
              <p>
                Images in Bootstrap are made responsive with <code>.img-fluid</code>.
                <code> max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.
              </p>
              <div className="table-responsive">
                <Link className="btn btn-primary btn-sm mb-3" to="/form/Careersform">Add New</Link>
                <table className="table table-striped mb-0" role="grid">
                  <thead>
                    <tr>
                      <th>Job Name</th>
                      <th>Role Name</th>
                      <th>Icon Class Name</th>
                      <th>Experience</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? renderLoading() : error ? (
                      <tr>
                        <td colSpan="5" className="text-center text-danger">Error: {error}</td>
                      </tr>
                    ) : jobs.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center text-muted">No jobs found.</td>
                      </tr>
                    ) : (
                      jobs.map((job) => (
                        <tr key={job.id}>
                          <td>{job.JobName}</td>
                          <td>{job.RoleName}</td>
                          <td>{job.Iconclassname}</td>
                          <td>{job.exp}</td>
                          <td>
                            <Link className="btn btn-warning btn-sm me-2" to={`/form/Careersupdateform?id=${job.id}`}>Update</Link>
                            <button className="btn btn-danger btn-sm" onClick={() => deleteJob(job.id)}>Delete</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-download mt-4 text-end">
        <a
          className="btn btn-success px-3 py-2"
          href="https://iqonic.design/product/admin-templates/hope-ui-admin-free-open-source-bootstrap-admin-template/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="icon-24"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3v12m0 0l4-4m-4 4l-4-4m8 7H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="ms-2">Download Template</span>
        </a>
      </div>
    </div>
  );
};

export default CareerTable;
