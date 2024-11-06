document.addEventListener("DOMContentLoaded", function() {
    // Data for each section of the "CyberSecurity Projects" journal
    const projectDetails = {
        incidentReport: [
            {
                title: "Scenario",
                content: `    
                    You are a cybersecurity analyst working for a multimedia company that offers web design services, 
                    graphic design, and social media marketing solutions to small businesses.<br> Your organization recently 
                    experienced a DDoS attack, which compromised the internal network for two hours until it was resolved. <br>
                    During the attack, your organization’s network services suddenly stopped responding due to an incoming 
                    flood of ICMP packets. Normal internal network traffic could not access any network resources. <br><br>
                    The incident management team responded by blocking incoming ICMP packets, stopping all non-critical network 
                    services offline, and restoring critical network services. <br>
                    The company’s cybersecurity team then investigated the security event. They found that a malicious 
                    actor had sent a flood of ICMP pings into the company’s network through an unconfigured firewall. 
                    This vulnerability allowed the malicious attacker to overwhelm the company’s network through a distributed 
                    denial of service (DDoS) attack. <br> To address this security event, the network security team implemented: <br><br>
                    <ul>
                    <li> A new firewall rule to limit the rate of incoming ICMP packets</li><br>
                    <li>Source IP address verification on the firewall to check for spoofed IP addresses on incoming ICMP packets</li><br>
                    <li>Network monitoring software to detect abnormal traffic patterns</li><br>
                    <li>An IDS/IPS system to filter out some ICMP traffic based on suspicious characteristics</li><br>
                    </ul><br><br>

                    As a cybersecurity analyst, you are tasked with using this security event to create a plan to improve 
                    your company’s network security, following the National Institute of Standards and Technology (NIST) 
                    Cybersecurity Framework (CSF). You will use the CSF to help you navigate through the different steps 
                    of analyzing this cybersecurity event and integrate your analysis into a general security strategy.<br><br>
                    <ul>
                    <li>Identify, </li><br>
                    <li>Protect, </li><br>
                    <li>Detect, </li><br>
                    <li>Respond, </li><br>
                    <li>Recover.</li><br>


                `
            },
            {
                title: "Summary",
                content: `
                   The company experienced a security event when all network services suddenly stopped responding. <br>
                   The cybersecurity team found the disruption was caused by a distributed denial of services (DDoS) attack through a flood of incoming ICMP packets.<br><br> 
                   The team responded by blocking the attack and stopping all non-critical network services, so that critical network services could be restored.
                `
            },
            {
                title: "IDENTIFY",
                content: `
                    The incident management team audited the systems, devices, and access policies involved in the attack to identify the gaps in security. <br>
                    A malicious attacker targeted the company with an ICMP flood attack. The team found that an intern’s login and password were obtained
                    and used to access data from our customer database. <br> The entire internal network was affected. 
                    <br><br>Upon initial review, it appears that some customer data was deleted from the database.<br>
                    All critical network resources needed to be secured and restored to a functioning state.

                `
            },
            {
                title: "PROTECT",
                content: `
                    The team has implemented new authentication policies to prevent future attacks: <br><br>
                    <ul>
                    <li>multi-factor authentication (MFA),</li> <br>
                    <li>login attempts limited to three tries, </li><br>
                    <li>training for all employees on how to protect login credentials,</li><br>
                    <li>implement a new protective firewall configuration to limit the rate of incoming ICMP packets, </li><br>
                    <li>invest in an intrusion prevention system. (IPS).
                    </ul>

                `
            },
            {
                title: "DETECT",
                content: `
                    To detect new unauthorized access attacks in the future, the team will use a 
                    firewall logging tool and an intrusion detection system (IDS) to monitor all incoming traffic from the internet, <br>
                    configured source IP address verification on the firewall to check for spoofed IP
                    addresses on incoming ICMP packets and implemented network monitoring software to detect abnormal traffic patterns. 
                `
            },
            {
                title: "RESPOND",
                content: `
                    The team disabled the intern’s network account, 
                    informed upper management of this event and they will contact our customers by mail to inform them about the data breach. <br>
                    Management will also need to inform law enforcement and other organizations as required by local laws. <br><br>
                    Provided training to interns and employees on how to protect login credentials in the future.
                    
                    For future security events, the cybersecurity team will isolate affected systems to prevent further disruption to the network.<br>
                    <br>The team will analyze network logs to check for suspicious and abnormal activity. 
                `
            },
            {
                title: "RECOVER",
                content: `
                    The team will recover the deleted data by restoring the database from last night’s full backup. <br>
                    We have informed staff that any customer information entered or changed this morning would not be recorded on the backup. <br>
                    So, they will need to re-enter that information into the database once it has been restored from last night’s backup.

                `
            }
        ],



        vulnerabilityAssessment: [
            {
                title: "Scenario",
                content: `
                    You are a newly hired cybersecurity analyst for an e-commerce company. <br>
                    The company stores information on a remote database server, since many of the employees work remotely from locations all around the world. <br>
                    Employees of the company regularly query, or request, data from the server to find potential customers. <br>
                    The database has been open to the public since the company's launch three years ago.<br>
                    As a cybersecurity professional, you recognize that keeping the database server open to the public is a serious vulnerability. <br><br>

                    You are tasked with completing a vulnerability assessment of the situation to communicate the potential risks to decision makers at the company.<br>
                    Create a written report that explains how the vulnerable server is a risk to business operations and how it can be secured.

                `
            },
            {
                title: "Vulnerability Assessment Report",
                content: `
                    <strong>1st January 20XX</strong><br>
                    <strong>System Description</strong><br><br>
                    The server hardware consists of a powerful CPU processor and 128GB of memory. <br>
                    It runs on the latest version of Linux operating system and hosts a MySQL database management system. <br>
                    It is configured with a stable network connection using IPv4 addresses and interacts with other servers on the network.<br>
                     Security measures include SSL/TLS encrypted connections.
                `
            },
            {
                title: "Scope",
                content: `
                    The scope of this vulnerability assessment relates to the current access controls of the system.<br>
                    The assessment will cover a period of three months, from June 20XX to August 20XX.<br><br>
                    NIST SP 800-30 Rev.1 is used to guide the risk analysis of the information system.
                `
            },
            {
                title: "Risk Assessment",
                content: `
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="background-color: #f57208;">
                        <th style="border: 1px solid #ddd; padding: 8px;">Threat source</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">Threat event</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">Likelihood</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">Severity</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">Risk</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Hacker</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">Obtain sensitive information via exfiltration</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">3</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">3</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">9</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Employee</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">Disrupt mission-critical operations</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">2</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">3</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">6</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">User</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">Delete or modify critical information</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">3</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">3</td>
                    </tr>
                </tbody>
            </table>
        `
            },
            {
                title: "Approach",
                content: `
                Risks considered: <br><br>
                The data storage and management methods of the business, <br>
                the likelihood of a threat occurrence and the impact of these potential events were weighed against the risks to day-to-day operational needs.
                   
                `
            },
            {
                title: "Remediation Strategy",
                content: `
                Implementation of authentication, authorization, and auditing mechanisms to ensure that only authorized users access the database server.<br>
                This includes:<br>
                <ul>
                <li> using strong passwords,</li><br> 
                <li> role-based access controls,</li><br>
                <li> multi-factor authentication to limit user privileges. </li><br>
                <li> encryption of data in motion using TLS instead of SSL. </li><br> 
                <li> IP allow-listing to corporate offices to prevent random users from the internet from connecting to the database.</li>
                   
                `
            },
        ],


        sqlLabs: [
            {
                title: "SQL Queries",
                content: `
                <ul>
                    <li><em> Retrive 'device_id' and 'operating_system' columns from the 'machines' table.</li></em>
                    <pre><code class="sql">SELECT device_id, operating_system FROM machines;</code></pre>
                    <br><br>

                    <li><em>Obtain a list of all machines with the 'OS 2' because this machines need an update.</li></em>
                    <pre><code class="sql">SELECT device_id, operating_system FROM machines WHERE operating_system = 'OS 2';</code></pre>
                    <br><br>

                    <em><li>Retrive a list of all employees in the Finance department to obtain their office numbers.<br></em>
                    A notice about handling confidencial financial information will be posted to these offices.</li>
                    <pre><code class="sql"> SELECT * FROM employees WHERE department = 'Finance';</code></pre>
                    <br><br>

                    <li><em>Identify employee machines : A machine in 'South-109' has an issue.<br>
                    Determine which employee uses that computer so you can send them an alert.</li></em>
                    <pre><code class="sql">SELECT * FROM employees WHERE office = 'South-109';</code></pre>
                    <br><br>

                    <em><li>Your team has determined that there is an issue with all the machines in the South building.<br>
                    Retrive information on all the employees in the 'South' building.</li></em>
                    <pre><code class="sql">SELECT * FROM employees WHERE office LIKE 'South%';</code></pre>
                    <br><br>

                    <em><li>To investigate a recent security incident, retrive login attempts after a certain date.</li></em>
                    <pre><code class="sql">SELECT * FROM log_in_attempts WHERE login_date > '2022-05-09';</code></pre>
                    <br><br>

                    <em><li>Retrive logins in a date range : 
                    Narrow the focus of the search to login attempts made between '2022-05-09' and '2022-05-11'.<br>
                    Login made after '2022-05-11' should not be included.<em></li>
                    <pre><code class="sql">SELECT * FROM log_in_attempts WHERE login_date BETWEEN '2022-05-09' AND '2022-05-11';</code></pre>
                    <br><br>

                    <em><li>Investigate login at certain times : <br>
                    Your organization's typical work begin at 07:00:00.<br> 
                    Retrive all login attempts made before 07:00:00 to learn about users who are logged in outside of typical hours.</li></em>
                    <pre><code class="sql">SELECT * FROM log_in_attempts WHERE login_time < '07:00:00';</code></pre>
                    <br><br>

                    <em><li>Modify the previous query to return logins between '06:00:00' and '07:00:00'.</em></li>
                    <pre><code class="sql">SELECT * FROM log_in_attempts WHERE login_time BETWEEN '06:00:00' AND '07:00:00';</code></pre>
                    <br><br>

                    <em><li>Investigate logins by event ID : <br>
                    In this query, return only the 'event_id', 'username' and 'login_date' fields from the 'log_in_attempts' table.</li></em>
                    <pre><code class="sql">SELECT event_id, username, login_date FROM log_in_attempts WHERE event_id >= 100;</code></pre>
                    <br><br>

                    <em><li>Modify the query to return only login attempts with 'event_id' between 100 and 150.</li></em>
                    <pre><code class="sql">SELECT event_id, username, login_date FROM log_in_attempts WHERE event_id BETWEEN 100 AND 150;</code></pre>
                    <br><br>

                    <em><li>Retrive after hours failed login attempts : <br>
                    Your team is investigating failed login attempts that were made after business hours.<br>
                    Retrive this information from the login activity. Office hours end at 18:00.</li></em>
                    <pre><code class="sql">SELECT * FROM log_in_attempts WHERE login_time > '18:00:00' AND success = 0;</code></pre>
                    <br><br>

                    <em><li>Retrive login attempts on specific dates : <br>
                    Your team is investigating a suspicious event occurred on '2022-05-09'.<br>
                    Retrive all login attempts that occurred on this day and the day before.</li></em>
                    <pre><code class="sql">SELECT * FROM log_in_attempts WHERE login_date = '2022-05-09' OR login_date = '2022-05-08';</code></pre>
                    <br><br>

                    <em><li>Retrive login attempts outside of Mexico<br>
                    Your team is investigating logins that did not originate in Mexico. Field includes entries with 'MEX' and 'MEXICO' </li></em>
                    <pre><code class="sql">SELECT * FROM log_in_attempts WHERE NOT country LIKE 'Mex%';</code></pre>
                    <br><br>
                `
            },
        ],


        linuxCommand: [
            {
                title: "Check file and directory details",
                content: `

<pre><code>
# Explore the permission of the project's directory and the file it contains, including hidden files
    ls -la
</code></pre>
        
<pre><code>
#Change file permission to the 'project_k.txt' file. Removing write permission to 'other'.
    chmod o-w project_k.txt
</code></pre>

<pre><code>
#Remove the write permission for the user and for the group and grant permission to read for the group.
    chmod u-w,g-w,g+r .project_k.txt
</code></pre>

<pre><code>
#Navigate to the project directory and list the content and permission
    cd projects
    /projects ls -l
</code></pre>

<pre><code>
#Change the permission of the identified file so that the owner type of other does not have write permission
    chmod o-w project_k.txt
</code></pre>

<pre><code>
#Change permissions of the project_m.txt file so that the group doesn’t have read or write permissions.
    chmod g-r project_m.txt
</code></pre>

<pre><code>
#The file '.project_x.txt' is a hidden file that has been archived and should not be written to by anyone. 
#(The user and group should still be able to read this file.)
    chmod u-w,g-w,g+r .project_x.txt
</code></pre>

<pre><code>
#Only the researcher2 user should be allowed to access the drafts directory and its contents. 
#(Only researcher2 should have execute privileges.) Currently, the group has 'execute' access.
    chmod g-x drafts
</code></pre>
                `
            },
        ],


        riskAssessment: [
            {
                title: "Scenario",
                content: `
                    You've joined a new cybersecurity team at a commercial bank. <br>
                    The team is conducting a risk assessment of the bank's current operational environment. 
                    <br>As part of the assessment, they are creating a risk register to help them focus on securing the most 
                    vulnerable risks. <br><br> Your supervisor asks you to evaluate a set of risks that the cybersecurity team 
                    has recorded in the risk register. For each risk, you will first determine how likely that risk is to occur. 
                    Then, you will determine how severely that risk may impact the bank. 
                    Finally, you will calculate a score for the severity of that risk. 
                    You will then compare scores across all risks so your team can determine how to prioritize their 
                    attention for each risk.
                    <br><br>
                    <strong>Operational environment:</strong><br>
                    The bank is located in a coastal area with low crime rates. Many people and systems handle the bank's 
                    data—100 on-premise employees and 20 remote employees. The customer base of the bank includes 2,000 
                    individual accounts and 200 commercial accounts. The bank's services are marketed by a professional 
                    sports team and ten local businesses in the community. There are strict financial regulations that require 
                    the bank to secure their data and funds, like having enough cash available each day to meet Federal Reserve 
                    requirements.
                `
            },
            {
                title: "Risk Assessment Table",
                content: `
                    <p>This table assesses various risks related to the asset category "Funds" and prioritizes them based on likelihood and severity.</p>
    
                    <!-- Table for risk assessment -->
                    <table style="width: 100%; border-collapse: collapse; text-align: left;">
                        <thead>
                            <tr style="background-color: #f57208;">
                                <th style="border: 1px solid #ccc; padding: 8px;">Asset</th>
                                <th style="border: 1px solid #ccc; padding: 8px;">Risk(s)</th>
                                <th style="border: 1px solid #ccc; padding: 8px;">Description</th>
                                <th style="border: 1px solid #ccc; padding: 8px;">Likelihood</th>
                                <th style="border: 1px solid #ccc; padding: 8px;">Severity</th>
                                <th style="border: 1px solid #ccc; padding: 8px;">Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="border: 1px solid #ccc; padding: 8px;">Funds</td>
                                <td style="border: 1px solid #ccc; padding: 8px;">Business email compromise</td>
                                <td style="border: 1px solid #ccc; padding: 8px;">An employee is tricked into sharing confidential information.</td>
                                <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">2</td>
                                <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">2</td>
                                <td style="border: 1px solid #ccc; padding: 8px; background-color: #f4f4a3; color: black; text-align: center;">4</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; padding: 8px;">Funds</td>
                                <td style="border: 1px solid #ccc; padding: 8px;">Compromised user database</td>
                                <td style="border: 1px solid #ccc; padding: 8px;">Customer data is poorly encrypted.</td>
                                <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">2</td>
                                <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">3</td>
                                <td style="border: 1px solid #ccc; padding: 8px; background-color: #f6c0a3; color: black; text-align: center;">6</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; padding: 8px;">Funds</td>
                                <td style="border: 1px solid #ccc; padding: 8px;">Financial records leak</td>
                                <td style="border: 1px solid #ccc; padding: 8px;">A database server of backed-up data is publicly accessible.</td>
                                <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">3</td>
                                <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">3</td>
                                <td style="border: 1px solid #ccc; padding: 8px; background-color: #f4a3a3; color: black; text-align: center;">9</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; padding: 8px;">Funds</td>
                                <td style="border: 1px solid #ccc; padding: 8px;">Theft</td>
                                <td style="border: 1px solid #ccc; padding: 8px;">The bank's safe is left unlocked.</td>
                                <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">1</td>
                                <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">3</td>
                                <td style="border: 1px solid #ccc; padding: 8px; background-color: #d7f6a3; color: black; text-align: center;">3</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; padding: 8px;">Funds</td>
                                <td style="border: 1px solid #ccc; padding: 8px;">Supply chain disruption</td>
                                <td style="border: 1px solid #ccc; padding: 8px;">Delivery delays due to natural disasters.</td>
                                <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">1</td>
                                <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">2</td>
                                <td style="border: 1px solid #ccc; padding: 8px; background-color: #e2f6a3; color: black; text-align: center;">2</td>
                            </tr>
                        </tbody>
                    </table>
    
                    <br>
                    <strong>Notes:</strong>
                    <p style="font-style: italic; color: #666;">
                        Doing business with other companies might increase the risk to data since it presents other avenues for the information to be compromised.
                        The risk of theft is important but might not be a priority because the bank is in an area with low crime.
                    </p>
                `
            },
            {
                title: "Sample risk matrix",
                content: `
                <table style="border-collapse: collapse; width: 80%; margin: 0 auto; text-align: center;">
                    <thead>
                        <tr>
                            <th rowspan="2" style="border: none;"></th>
                            <th colspan="3" style="padding: 10px; font-weight: bold; border: 1px solid #ccc; background-color: #333; color: white;">
                                Severity
                            </th>
                        </tr>
                        <tr>
                            <th style="padding: 10px; border: 1px solid #ccc; background-color: #444; color: white;">Low<br>1</th>
                            <th style="padding: 10px; border: 1px solid #ccc; background-color: #444; color: white;">Moderate<br>2</th>
                            <th style="padding: 10px; border: 1px solid #ccc; background-color: #444; color: white;">Catastrophic<br>3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style="padding: 10px; border: 1px solid #ccc; background-color: #333; color: white;" rowspan="3">
                                Likelihood
                            </th>
                            <td style="padding: 10px; border: 1px solid #ccc; background-color: #ffffcc; color: black;">3</td>
                            <td style="padding: 10px; border: 1px solid #ccc; background-color: #ffcc99; color: black;">6</td>
                            <td style="padding: 10px; border: 1px solid #ccc; background-color: #ff9999; color: black;">9</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ccc; background-color: #ccffcc; color: black;">2</td>
                            <td style="padding: 10px; border: 1px solid #ccc; background-color: #ffffcc; color: black;">4</td>
                            <td style="padding: 10px; border: 1px solid #ccc; background-color: #ffcc99; color: black;">6</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ccc; background-color: #cccccc; color: black;">1</td>
                            <td style="padding: 10px; border: 1px solid #ccc; background-color: #ccffcc; color: black;">2</td>
                            <td style="padding: 10px; border: 1px solid #ccc; background-color: #ffffcc; color: black;">3</td>
                        </tr>
                    </tbody>
                </table>

                `
            },

        ],


        phishingEmail:[
            {
                title: "Scenario",
                content: `
                You are a level-one security operations center (SOC) analyst at a financial services company. <br>
                Previously, you received a phishing alert about a suspicious file being downloaded on an employee's computer.<br>
                After investigating the email attachment file's hash, the attachment has already been verified malicious.<br>
                Now that you have this information, you must follow your organization's process to complete your investigation
                and resolve the alert.<br><br> Your organization's security policies and procedures describe how to respond 
                to specific alerts, including what to do when you receive a phishing alert.<br>
                In the playbook, there is a flowchart and written instructions to help you complete your<br>
                investigation and resolve the alert.<br><br> 
                At the end of your investigation, update the alert ticket with your findings about the incident.
                `
            },
            {
                title: "Additional Information",
                content: `
                <div class="journal-content">
                    <strong>Phishing Playbook</strong>
                    
                    <!-- Link to Open Document -->
                    <a href="documents/phishing_playbook.docx" target="_blank" style="text-decoration: none;">
                        <button style="padding: 10px 20px; background-color: #f39c12; color: white; border: none; border-radius: 5px; cursor: pointer;">
                            Open Phishing Playbook
                        </button>
                    </a>
                </div>
                <br><br>

                <strong> Known malicious file hash:</strong> <br>
                54e6ea47eb04634d3e87fd7787e2136ccfbcc80ade34f246a12cf93bab527f6b
                <br><br>
                <strong>Email:</strong>
                From: Def Communications <76tguyhh6tgftrt7tg.su>  <114.114.114.114><br>
                Sent: Wednesday, July 20, 2022 09:30:14 AM <br>
                To: <hr@inergy.com> <176.157.125.93> <br>
                Subject: Re: Infrastructure Egnieer role <br><br>

                Dear HR at Ingergy,<br><br>

                I am writing for to express my interest in the engineer role posted from the website.<br><br>

                There is attached my resume and cover letter. For privacy, the file is password protected. 
                Use the password paradise10789 to open. <br><br>

                Thank you, <br><br>

                Clyde West<br>
                Attachment: filename="bfsvc.exe"
                `
            },
            {
                title: "Alert Ticket",
                content: `
                <div class="journal-table-container">
                    <table class="journal-table">
                        <thead>
                            <tr>
                                <th>Ticket ID</th>
                                <th>Alert Message</th>
                                <th>Severity</th>
                                <th>Details</th>
                                <th>Ticket status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="centered">A-2703</td>
                                <td>SERVER-MAIL<br>Phishing attempt<br>possible download of malware</td>
                                <td class="centered">Medium</td>
                                <td>The user may have opened a malicious email and opened attachments or clicked links.</td>
                                <td class="centered">Escalated</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <style>
                    /* Container to control spacing and alignment in the journal */
                    .journal-table-container {
                        margin: 20px 0;
                        width: 100%;
                        overflow-x: auto; /* Allow horizontal scroll on small screens */
                    }

                    /* Table styling */
                    .journal-table {
                        width: 100%;
                        border-collapse: collapse;
                        font-family: Arial, sans-serif;
                    }

                    .journal-table th, .journal-table td {
                        border: 1px solid #333;
                        padding: 10px;
                        text-align: left;
                    }

                    /* Header styling */
                    .journal-table th {
                        background-color: #f57208;
                        font-weight: bold;
                        color: #333;
                    }

                    /* Center align for specific cells */
                    .centered {
                        text-align: center;
                        vertical-align: middle;
                    }

                    /* Responsive styling for small screens */
                    @media (max-width: 600px) {
                        .journal-table th, .journal-table td {
                            padding: 8px;
                            font-size: 0.9em;
                        }
                    }
                </style>
                <br><br>


                <!-- Insert this within your journal content in the modal -->
                <div class="journal-table-container">
                    <table class="comments-table">
                        <thead>
                            <tr>
                                <th>Ticket comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    The alert detected that an employee downloaded and opened a malicious file from a phishing email. There is an inconsistency between the sender’s email address "76tguy6hh6tgftrt7tg.su" the name used in the email body "Clyde West," and the sender’s name, "Def Communications." The email body and subject line contained grammatical errors.
                                    <br><br>
                                    The email’s body also contained a password-protected attachment, "bfsvc.exe," which was downloaded and opened on the affected machine. Having previously investigated the file hash, it is confirmed to be a known malicious file. Furthermore, the alert severity is reported as medium. With these findings, I chose to escalate this ticket to a level two SOC analyst to take further action.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <style>
                    /* Container to control spacing in the journal */
                    .journal-table-container {
                        margin: 20px 0;
                        width: 100%;
                    }

                    /* Table styling */
                    .comments-table {
                        width: 100%;
                        border-collapse: collapse;
                        font-family: Arial, sans-serif;
                    }

                    .comments-table th, .comments-table td {
                        border: 1px solid #333;
                        padding: 15px;
                        text-align: left;
                        font-size: 1em;
                    }

                    /* Header styling */
                    .comments-table th {
                        background-color: #f57208;
                        font-weight: bold;
                        color: #333;
                    }

                    /* Responsive styling for small screens */
                    @media (max-width: 600px) {
                        .comments-table th, .comments-table td {
                            padding: 10px;
                            font-size: 0.9em;
                        }
                    }
                </style>


                `
            },


        ],


        dataLeakWorksheet: [
            {
                title: "Incident summary:",
                content: `
                A sales manager shared access to a folder of internal-only documents with their team during a meeting. 
                The folder contained files associated with a new product that has not been publicly announced.<br>
                It also included customer analytics and promotional materials. After the meeting, the manager did not 
                revoke access to the internal folder, but warned the team to wait for approval before sharing the promotional 
                materials with others. <br><br>

                During a video call with a business partner, a member of the sales team forgot the warning from their manager. <br>
                The sales representative intended to share a link to the promotional materials so that the business partner 
                could circulate the materials to their customers. However, the sales representative accidentally shared
                 a link to the internal folder instead. Later, the business partner posted the link on their company's social 
                 media page assuming that it was the promotional materials.
                 <br><br>

                 <!-- Ticket Comments Table -->
                    <div class="ticket-comments-container">
                        <table class="ticket-comments-table">
                            <thead>
                                <tr>
                                    <th>Ticket comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        The alert detected that an employee downloaded and opened a malicious file from a phishing email. There is an inconsistency between the sender’s email address "76tguy6hh6tgftrt7tg.su," the name used in the email body "Clyde West," and the sender’s name, "Def Communications." The email body and subject line contained grammatical errors.
                                        <br><br>
                                        The email’s body also contained a password-protected attachment, "bfsvc.exe," which was downloaded and opened on the affected machine. Having previously investigated the file hash, it is confirmed to be a known malicious file. Furthermore, the alert severity is reported as medium. With these findings, I chose to escalate this ticket to a level two SOC analyst to take further action.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Add this CSS styling in your project.css or directly within a <style> tag -->
                    <style>
                        /* Container for table within the journal popup */
                        .ticket-comments-container {
                            margin: 20px 0;
                            width: 100%;
                        }

                        /* Table Styling */
                        .ticket-comments-table {
                            width: 100%;
                            border-collapse: collapse;
                            font-family: Arial, sans-serif;
                            color: #white;
                        }

                        .ticket-comments-table th, .ticket-comments-table td {
                            border: 1px solid #ddd;
                            padding: 15px;
                            text-align: left;
                            font-size: 1em;
                        }

                        /* Header styling */
                        .ticket-comments-table th {
                            background-color: #e3e7f0;
                            color: #333;
                            font-weight: bold;
                        }

                        /* Adjustments for cell content */
                        .ticket-comments-table td {
                            line-height: 1.6;
                        }

                        /* Responsive adjustments for smaller screens */
                        @media (max-width: 600px) {
                            .ticket-comments-table th, .ticket-comments-table td {
                                padding: 10px;
                                font-size: 0.9em;
                            }
                        }
                    </style>


                `
            },
            {
                title: "Security plan snapshot:",
                content: ` The NIST Cybersecurity Framework (CSF) uses a hierarchical, tree-like structure to organize information. 
                From left to right, it describes a broad security function, then becomes more specific as it branches 
                out to a category, subcategory, and individual security controls.
                <br><br>

               <div class="data-protection-table-container">
                <table class="data-protection-table">
                    <thead>
                        <tr>
                            <th>Function</th>
                            <th>Category</th>
                            <th>Subcategory</th>
                            <th>Reference(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="function-cell">Protect</td>
                            <td>PR.DS: <em>Data security</em></td>
                            <td>PR.DS-5: <em>Protections against data leaks.</em></td>
                            <td>NIST SP 800-53: AC-6</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <style>
                /* Container for the table */
                .data-protection-table-container {
                    margin: 20px 0;
                    width: 100%;
                }

                /* Table Styling */
                .data-protection-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-family: Arial, sans-serif;
                    color: white; /* Default text color for table cells */
                }

                .data-protection-table th, .data-protection-table td {
                    border: 1px solid #ddd;
                    padding: 10px;
                    text-align: left;
                    font-size: 1em;
                }

                /* Header styling */
                .data-protection-table th {
                    background-color: #f39c12; /* Header background color */
                    color: #333; /* Header text color */
                    font-weight: bold;
                }

                /* Special styling for Function cell */
                .function-cell {
                    background-color: #f39c12; /* Background color for "Protect" cell */
                    color: #333; /* Text color for "Protect" cell */
                    font-weight: bold;
                }

                /* Italic styling for specific cells */
                .data-protection-table td em {
                    font-style: italic;
                    color: white; /* Ensures italic text in cells remains white */
                }

                /* Responsive adjustments for smaller screens */
                @media (max-width: 600px) {
                    .data-protection-table th, .data-protection-table td {
                        padding: 8px;
                        font-size: 0.9em;
                    }
                }
            </style>

                `

            },
            {
                
                title: "NIST SP 800-53: AC-6:",
                content: `
                NIST developed SP 800-53 to provide businesses with a customizable information privacy plan. 
                It's a comprehensive resource that describes a wide range of control categories. 
                Each control provides a few key pieces of information:
                <ul>
                <li>Control: A definition of the security control.</li>
                <li>Discussion: A description of how the control should be implemented.</li>
                <li>Control enhancements: A list of suggestions to improve the effectiveness of the control.</li>
                </ul>
                <br><br>

                <div class="least-privilege-table-container">
                    <table class="least-privilege-table">
                        <tbody>
                            <tr>
                                <td class="header-cell">AC-6</td>
                                <td><strong>Least Privilege</strong></td>
                            </tr>
                            <tr>
                                <td class="sub-header-cell">Control:</td>
                                <td>Only the minimal access and authorization required to complete a task or function should be provided to users.</td>
                            </tr>
                            <tr>
                                <td class="sub-header-cell">Discussion:</td>
                                <td>
                                    Processes, user accounts, and roles should be enforced as necessary to achieve <em>least privilege</em>.
                                    The intention is to prevent a user from operating at privilege levels higher than what is necessary to accomplish
                                    business objectives.
                                </td>
                            </tr>
                            <tr>
                                <td class="sub-header-cell">Control enhancements:</td>
                                <td>
                                    <ul class="enhancements-list">
                                        <li> Restrict access to sensitive resources based on user role.</li>
                                        <li> Automatically revoke access to information after a period of time.</li>
                                        <li> Keep activity logs of provisioned user accounts.</li>
                                        <li> Regularly audit user privileges.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <style>
                    /* Container for the table */
                    .least-privilege-table-container {
                        margin: 20px 0;
                        width: 100%;
                    }

                    /* Table Styling */
                    .least-privilege-table {
                        width: 100%;
                        border-collapse: collapse;
                        font-family: Arial, sans-serif;
                        color: white; /* Default text color for readability */
                    }

                    .least-privilege-table td {
                        border: 1px solid #ddd;
                        padding: 10px;
                        vertical-align: top;
                        font-size: 1em;
                    }

                    /* Header Cell Styling */
                    .header-cell {
                        background-color: #f39c12;
                        color: #333; /* Dark text color for headers */
                        font-weight: bold;
                        width: 10%;
                        text-align: center;
                    }

                    /* Sub-header cells */
                    .sub-header-cell {
                        background-color: #f39c12; /* Header background color */
                        color: #333; /* Dark text color for sub-headers */
                        font-weight: bold;
                        width: 20%;
                        vertical-align: top;
                    }

                    /* Italicize specific terms */
                    .least-privilege-table td em {
                        font-style: italic;
                        color: white; /* Ensures italic text in cells remains white */
                    }

                    /* Enhancements list styling */
                    .enhancements-list {
                        list-style-type: none;
                        padding-left: 0;
                    }

                    .enhancements-list li {
                        margin-bottom: 5px;
                        display: flex;
                        align-items: center;
                    }

                    .enhancements-list li::before {
                        content: '●';
                        color: white; /* Bullet color for better contrast */
                        margin-right: 8px;
                        font-size: 1.2em;
                    }

                    /* Link styling in the table */
                    .least-privilege-table a {
                        color: white; /* White links for readability */
                        text-decoration: underline;
                        cursor: pointer;
                    }

                    /* Responsive adjustments for smaller screens */
                    @media (max-width: 600px) {
                        .least-privilege-table td {
                            padding: 8px;
                            font-size: 0.9em;
                        }
                    }
                </style>

                `

            }
        ],

        botiumToys: [
            {
                title: "Botium Toys: Scope, goals, and risk assessment report:",
                content: `
                <strong>Scope:</strong><br>
                The scope of this audit is defined as the entire security program at Botium
                Toys. This includes their assets like employee equipment and devices, their internal
                network, and their systems. You will need to review the assets Botium Toys has and the
                controls and compliance practices they have in place.
                <br><br>


                <strong>Goals:</strong><br>
                Assess existing assets and complete the controls and compliance checklist to
                determine which controls and compliance best practices that need to be implemented
                to improve Botium Toys’ security posture.
                <br>
                `
            },
            {
                title: "Current assets:",
                content: `
                Assets managed by the IT Department include:<br>
                <ul>
                <li> On-premises equipment for in-office business needs </li>
                <li> Employee equipment: end-user devices (desktops/laptops, smartphones),
                remote workstations, headsets, cables, keyboards, mice, docking stations,
                surveillance cameras, etc. </li>
                <li> Storefront products available for retail sale on site and online; stored in the
                company’s adjoining warehouse </li>
                <li> Management of systems, software, and services: accounting,
                telecommunication, database, security, ecommerce, and inventory
                management </li>
                <li> Internet access </li>
                <li> Internal network  </li>
                <li> Data retention and storage </li>
                <li> Legacy system maintenance: end-of-life systems that require human
                monitoring </li>
                </ul>

                `
            },
            {
                title: "Risk assessment:",
                content: `
                <strong>Risk description</strong><br>
                Currently, there is inadequate management of assets. Additionally, Botium Toys does
                not have all of the proper controls in place and may not be fully compliant with U.S. and
                international regulations and standards.<br><br>

                <strong>Control best practices</strong><br>
                The first of the five functions of the NIST CSF is Identify. Botium Toys will need to
                dedicate resources to identify assets so they can appropriately manage them.
                Additionally, they will need to classify existing assets and determine the impact of the
                loss of existing assets, including systems, on business continuity.<br><br>

                <strong>Risk score</strong><br>
                On a scale of 1 to 10, the risk score is 8, which is fairly high. This is due to a lack of
                controls and adherence to compliance best practices.<br><br>

                <strong>Additional comments</strong><br>
                The potential impact from the loss of an asset is rated as medium, because the IT
                department does not know which assets would be at risk. The risk to assets or fines
                from governing bodies is high because Botium Toys does not have all of the necessary
                controls in place and is not fully adhering to best practices related to compliance
                regulations that keep critical data private/secure. Review the following bullet points for
                specific details:<br>
                <ul>
                <li> Currently, all Botium Toys employees have access to internally stored data and
                may be able to access cardholder data and customers’ PII/SPII.</li>
                <li> Encryption is not currently used to ensure confidentiality of customers’ credit
                card information that is accepted, processed, transmitted, and stored locally in
                the company’s internal database.</li>
                <li> Access controls pertaining to least privilege and separation of duties have not
                been implemented.</li>
                <li> The IT department has ensured availability and integrated controls to ensure
                data integrity.</li>
                <li> The IT department has a firewall that blocks traffic based on an appropriately
                defined set of security rules.</li>
                <li> Antivirus software is installed and monitored regularly by the IT department.</li>
                <li> The IT department has not installed an intrusion detection system (IDS).</li>
                <li> There are no disaster recovery plans currently in place, and the company does
                not have backups of critical data.</li>
                <li> The IT department has established a plan to notify E.U. customers within 72
                hours if there is a security breach. Additionally, privacy policies, procedures, and
                processes have been developed and are enforced among IT department
                members/other employees, to properly document and maintain data.</li>
                <li> Although a password policy exists, its requirements are nominal and not in line
                with current minimum password complexity requirements (e.g., at least eight
                characters, a combination of letters and at least one number; special
                characters).</li>
                <li> There is no centralized password management system that enforces the
                password policy’s minimum requirements, which sometimes affects
                productivity when employees/vendors submit a ticket to the IT department to
                recover or reset a password.</li>
                <li> While legacy systems are monitored and maintained, there is no regular
                schedule in place for these tasks and intervention methods are unclear.</li>
                <li> The store’s physical location, which includes Botium Toys’ main offices, store
                front, and warehouse of products, has sufficient locks, up-to-date
                closed-circuit television (CCTV) surveillance, as well as functioning fire
                detection and prevention systems </li>
                </ul>


                `
            },
        ],

        encrypt: [
            { 
            title: "Decrypt an encrypted message:",
            content: `
            <strong>Scenario: </strong><br>
            All of the files in your home directory have been encrypted. <br>
            You’ll need to use Linux commands to break the Caesar cipher and decrypt the files so that you can read the 
            hidden messages they contain.<br><br>
            <ul>
            <li>Read the contents of a file: </li>

            <pre><code class="bash">
analyst@5fa727d6851f:~$ pwd
/home/analyst
analyst@5fa727d6851f:~$ ls
Q1.encrypted  README.txt  caesar
            </code></pre><br>
            

            <li>Read the contents of the README file:</li>

            <pre><code class="bash">
analyst@5fa727d6851f:~$ cat README.txt
Hello,
All of your data has been encrypted. To recover your data, you will need to solve a cipher. 
To get started, look for a hidden file in the caesar subdirectory.
            </code></pre><br>


            <li> Find a hidden file in your home directory and decrypt the Caesar cipher it contains.</li>

             <pre><code class="bash">
analyst@5fa727d6851f:~$ <span class="command">cd caesar</span>
analyst@5fa727d6851f:~/caesar$ <span class="command">ls -a</span>
.  ..  .leftshift3
            </code></pre><br>


            <li> List the contents of the .leftShift3 file: </li>

            <pre><code class="bash">
analyst@5fa727d6851f:~/caesar$ cat .leftShift3
Lq rughu wr uhfryhuh brxu ilohv brx zloo qhgh wr hqwhu wkh ioorzljq frppdqg:
rshrqvvo dhv-256-fef -sengi2 -d -g -lq T1.hqfubswhg -rxw T1.uhfryhuhg -n hwwxeuxwh
            </code></pre><br>


            <li> 3.	Decrypt the Caesar cipher in the .leftshift3 file: </li>

            <pre><code class="bash">
analyst@5fa727d6851f:~/caesar$ cat .leftShift3 | tr "d-za-cD-ZA-C" "a-zA-Z"
In order to recover your files you will need to enter the following command:
openssl aes-256-cbc -pbkdf2 -a -d -in Q1.encrypted -out Q1.recovered -k ettubrute
            </code></pre><br>


            <li> Use the exact command revealed in the previous task to decrypt the encrypted file: </li>

            <pre><code class="bash">
analyst@5fa727d6851f:~/caesar$ cd ~
analyst@5fa727d6851f:~$ openssl aes-256-cbc -pbkdf2 -a -d -in Q1.encrypted -out Q1.recovered -k ettubrute
analyst@5fa727d6851f:~$ ls
Q1.encrypted  Q1.recovered  README.txt  caesar
analyst@5fa727d6851f:~$ cat Q1.recovered
If you are able to read this, then you have successfully decrypted the classic cipher text.
You recovered the encryption key that was used to encrypt this file. Great work!
            </code></pre>
            </ul>
            `
        },
        {
             title: "Create hash values:",
            content: `
            <ul>
            <li>List the contents of the directory.</li>
            <pre><code class="bash">
analyst@afac0d26adfa:~$ ls
file1.txt  file2.txt
        </code></pre><br>


            <li>Use the cat command to display the contents of the file1.txt file and file2.txt:</li>
            <pre><code class="bash">
#file1.txt
analyst@afac0d26adfa:~$ cat file1.txt
X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*

#file2.txt
analyst@afac0d26adfa:~$ cat file2.txt
X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
            </code></pre><br>


            <li>Generate the hash of the file1.txt file:</li><
            <pre><code class="bash">
# Calculate SHA-256 checksum for file1.txt
analyst@afac0d26adfa:~$ sha256sum file1.txt
131f95c51cc819465fa1797f6ccacf9d494aaaff46fa3eac73ae63ffbdf8267  file1.txt

# Calculate SHA-256 checksum for file2.txt
analyst@afac0d26adfa:~$ sha256sum file2.txt
2558ba9a4cad1e69804ce03aa2a029526179a91a5e38cb723320e83af9ca017b  file2.txt
            </code></pre><br>


            <li>Compare hashes</li>
            <pre><code class="bash">
# Append SHA-256 checksum for file1.txt to file1hash
analyst@afac0d26adfa:~$ sha256sum file1.txt >> file1hash

# Append SHA-256 checksum for file2.txt to file2hash
analyst@afac0d26adfa:~$ sha256sum file2.txt >> file2hash
            </code></pre><br>


            <li>5.	Compare the two files byte by byte. <br>
            If a difference is found, the command reports the byte and line number where the first difference is found.</li>
            <pre><code class="bash">
# Compare file1hash and file2hash to check for differences
analyst@afac0d26adfa:~$ cmp file1hash file2hash
file1hash file2hash differ: char 1, line 1
            </code></pre>
            </ul>
            `
        }
        ],   
    };



    let currentSection = 0;
    let currentProject = [];

    // Load the selected project details
    window.loadProjectDetails = function(projectId) {
        currentProject = projectDetails[projectId];
        currentSection = 0;
        updateSection();
        document.getElementById('projectModal').style.display = 'flex';
    };

    // Update section content in the modal
    function updateSection() {
    if (currentProject && currentProject[currentSection]) {
        document.getElementById('journal-title').innerHTML = currentProject[currentSection].title;
        document.getElementById('journal-text').innerHTML = currentProject[currentSection].content;

        // Conditionally show/hide navigation buttons
        document.querySelector('.prev-btn').style.display = currentSection > 0 ? 'inline-block' : 'none';
        document.querySelector('.next-btn').style.display = currentSection < currentProject.length - 1 ? 'inline-block' : 'none';
    }
}


    // Next section
    window.nextSection = function() {
        if (currentSection < currentProject.length - 1) {
            currentSection++;
            updateSection();
        }
    };

    // Previous section
    window.prevSection = function() {
        if (currentSection > 0) {
            currentSection--;
            updateSection();
        }
    };

    // Close the modal
    window.closeModal = function() {
        document.getElementById('projectModal').style.display = 'none';
    };

    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('projectModal');
        if (event.target === modal) {
            closeModal();
        }
    };
});
