import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
      <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
      <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
      Creating clear and straightforward policies for an online Learning Management System (LMS) ensures that all users understand their responsibilities and the system operates smoothly. Firstly, only registered students, faculty, and staff can use the LMS, and they must use their official email addresses for account creation. Different access levels will be assigned based on user roles, such as students, instructors, or administrators, to maintain order and security.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Privacy and data protection are paramount. Personal information collected will be minimal, used solely for educational and administrative purposes, and stored securely with encryption. User data will never be shared with third parties without explicit consent, ensuring that all personal information remains confidential and protected.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Users must engage respectfully and professionally within the LMS. Inappropriate content, harassment, bullying, discrimination, and academic dishonesty like cheating or plagiarism are strictly prohibited. Any user can report violations, which will be investigated promptly to maintain a safe and respectful learning environment.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        To ensure accessibility, the LMS will be available 24/7, with notifications for any scheduled maintenance. Technical support will be provided during specific hours to assist with any issues. The LMS will be designed to be inclusive and accessible to all users, including those with disabilities. Users are encouraged to provide feedback on policies to help keep them effective and relevant.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Course management within the LMS is streamlined for efficiency and clarity. Only authorized faculty and staff can create and manage courses, ensuring that all course content is relevant and appropriately vetted. Students must enroll in courses through official channels, and any unauthorized access to courses is strictly prohibited. Faculty are required to provide clear criteria and timelines for assessments, adhering to institutional guidelines to maintain consistency and fairness in evaluations.
        </p>
        <br />
        <p className="py-s2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Finally, these policies may be updated periodically to adapt to changing needs and technologies. Users will be notified of any significant changes via email and LMS announcements, keeping everyone informed and up-to-date. Feedback from users is encouraged to ensure the policies remain effective and user-friendly. By complying with these guidelines, users help maintain a secure, respectful, and productive online learning environment that benefits everyone.
        </p>
      </ul>
      </div>
    </div>
  );
};

export default Policy;
