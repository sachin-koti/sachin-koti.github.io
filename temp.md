# Test Cases and Performance Testing Document (date: 05/26/2025)

### 1\. Objective

*   This document outlines the steps to run 1) unit/integration tests and 2) performance testing in the project, verify successful test execution, and includes key screenshots for reference.

### 2\. Prerequisites

*   Node.js and Angular CLI installed
*   The project is set up and dependencies are installed
*   Developer has access to the terminal or IDE

### 3\. Test Framework Used

*   Jasmine (for test specs)
*   Karma (for running the tests in browser)
*   Angular CLI testing command: ng test

### 4\. Steps to Run the Tests

#### 4.1 Using Command Line

*   Open terminal
*   Navigate to the project directory
*   Run:  
    ng test

#### 4.2 Optional CLI Flags

*   \--watch=false to run tests once
*   \--code-coverage to generate coverage reports

**Terminal showing ng test running**:
![image](https://github.com/user-attachments/assets/8a9f5b3b-222c-4ef2-b18a-e659adc4bf23)

![image](https://github.com/user-attachments/assets/ab5e1cbb-3fa8-406e-9ee7-c10e081ed8e0)

**With code coverage**:
![image](https://github.com/user-attachments/assets/13278b60-e7ff-4193-8ac0-d42ce303f5b0)

![image](https://github.com/user-attachments/assets/2f6c18e0-4f8c-4a3e-9c4f-4e0d488a7feb)


### 5\. How It Looks When Tests Run  

Below are the **screenshots along with the description** of the browser window that shows up when **ng test** is run.
![image](https://github.com/user-attachments/assets/618d9480-646a-43bd-a048-f2edc19f1829)

When running ng test, a browser window opens automatically using **Karma**, the Angular test runner. This window shows the test execution progress in real-time. The interface contains the following key elements:

*   ✅ **Connection Status** (Green Bar):  
    At the top, a green status bar indicates that Karma is successfully connected and that the tests have completed. It shows:  
    Karma v 6.4.4 - connected; test: complete;  
    
*   🌐 **Browser Info**:  
    Just below the status bar, it displays the browser being used for testing. In this case:  
    Chrome 136.0.0.0 (Linux x86\_64) is idle  
    
*   🔵 **Test Dots Grid**:  
    The center of the window shows a grid of dots representing individual test cases. Green dots indicate passing tests. If any test fails, they would show up in red or yellow (for pending/skipped tests).  
    
*   📋 **Detailed Test Logs** (Lower Section):  
    Below the grid, a textual breakdown shows:  
    *   The total number of specs: 1251 specs  
        
    *   Result summary: 0 failures  
        
    *   Random seed used for ordering: randomized with seed 36328  
        
    *   Time taken: finished in 8.387s  
        
    *   Individual test suite and test case names — for example:  
        *   HealthcareVerifyComponent  
            *   should create the component  
                
            *   should handle login with invalid password (401)  
                
            *   should navigate to login page when token verification fails  
                

This window provides a quick and interactive view of test outcomes, allowing developers to inspect failures or confirm test success visually.

![image](https://github.com/user-attachments/assets/4bfcf149-d754-4799-8840-c8de6b8d27ed)

![image](https://github.com/user-attachments/assets/b1f44966-440d-490d-ac9a-05dcbf2300b7)

### 

### 

### 

### 6\. Common Issues & Fixes

| Issue | Cause | Fix |
| --- | --- | --- |
| Only partial specs run | Presence of fit or fdescribe | Replace them with it or describe |
| Tests not starting | node_modules missing or project not built | Run npm install or ng build |
| Coverage not generated | Missing --code-coverage flag | Add --code-coverage to ng test command |
| Browser window not opening | browsers setting in karma.conf.js misconfigured | Ensure Chrome or ChromeHeadless is specified in karma.conf.js |
| Test timeout errors | Long-running async operations without proper done() or timeouts | Increase timeout or correctly handle async using done() or Promises |
| Errors like Cannot find module | Missing or incorrect imports | Double-check import paths and module names |
| NullInjectorError or DI errors | Component missing providers or dependencies in test setup | Add required providers in TestBed.configureTestingModule() |
| Random test failures | Shared mutable state between tests | Use beforeEach to isolate test setup and cleanup shared state |
| Test fails in CI but not locally | CI environment lacks browser or has headless mismatch | Use ChromeHeadless and install necessary dependencies in CI |
| Component styles not loading | styleUrls in component not properly handled in test setup | Add schemas: [CUSTOM_ELEMENTS_SCHEMA] or mock out style-related parts |
| ng test hangs or doesn’t exit | --watch is true (default) | Use ng test --watch=false to run once and exit |
| Changed tests not reflected | Cached Karma server still running | Restart ng test or clear Karma cache |

### 

### 

### 7\. Recommendations

*   Always remove focused tests (fit, fdescribe) before committing
*   Use ng test --watch=false in CI/CD
*   Use ng test --code-coverage for code coverage

### 8\. Appendix

*   Sample test file path: src/app/components/login/login.component.spec.ts  
    
*   Karma config location: karma.conf.js  
    

### 9\. Performance Testing with Apache JMeter

#### Overview

Apache JMeter is used to simulate high load on the Node.js backend APIs to analyze performance under stress and measure response time, throughput, error rate, and resource utilization.

#### Setup & Tools

*   **Tool**: Apache JMeter (GUI or CLI)  
    
*   **Target**: Node.js backend API endpoints (e.g., /login, /appointments)  
    
*   **Test Type**: Load Testing, Stress Testing, Spike Testing  
    

#### Steps to Run the Performance Test

1.  Open **Apache JMeter**  
    ![image](https://github.com/user-attachments/assets/182f55fc-594d-4b03-96ce-0c0fb9bcebf7)

2.  Add a **Thread Group**  
    **
    *   Users: 100
    *   Ramp-up period: 10 seconds
    *   Loop count: 5
    ![image](https://github.com/user-attachments/assets/0c89d1c0-bd4a-46cd-b70f-b4eeb8cf1be9)


3.  Add a **HTTP Request Sampler**  
    **
    *   Method: GET    
    *   URL: https://scriptchainhealth.com
    ![image](https://github.com/user-attachments/assets/94652cdd-0ce7-4ce9-b9c2-86fbe0734792)

4.  Add a **View Results Tree** and **Summary Report** listener  
    ![image](https://github.com/user-attachments/assets/c2c6d92b-49f3-44b2-af00-ccece6d26f21)
    
    ![image](https://github.com/user-attachments/assets/6ba78948-9588-441f-8ddf-e03de340954a)


5.  Run the test (Green Play button)
    ![image](https://github.com/user-attachments/assets/dee2c4e9-457d-4bd1-8480-a4fa4c58419c)

6.  Observe metrics:  
    *   Average response time
    *   Max response time
    *   Throughput (requests/sec)
    *   Error % (should be 0)
    ![image](https://github.com/user-attachments/assets/74dd4099-687d-4dd3-ae4e-a44dc054313f)

    ![image](https://github.com/user-attachments/assets/8c0e7191-8cbc-4d54-b51d-3cca58cf87b5)


#### Sample Results

| Metric | Value |
| --- | --- |
| Avg. Response Time | 185ms |
| Max. Response Time | 984ms |
| Throughput | 46.5 requests/sec |
| Error Rate | 0% |

### Common Issues & Fixes

| Issue | Cause | Fix |
| --- | --- | --- |
| JMeter shows 403 or 401 | Authorization token missing | Add token as a header in the HTTP request sampler |
| High error % | Backend not handling concurrent requests | Check server logs, increase worker threads or rate-limit |
| Connection refused | Server not running or port mismatch | Ensure Node.js server is started and listening on correct port |
| Slow response times | Insufficient server resources or DB bottlenecks | Profile backend, consider caching or load balancing |
