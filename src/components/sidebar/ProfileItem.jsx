import "./ProfileItem.css";
import { BiLogOut } from "react-icons/bi";
import profile from "./profile.jpg";

const ProfileItem = (props) => {
  return (
    <div>
      {props.isOpen && (
        <div class="profile">
          {props.isOpen && (
            <div className="profile-details">
              <img src={profile} alt="profileImg" />
              <div className="name_job">
                <div className="name">Ahmed Ali</div>
                <div className="job">Project Manager</div>
              </div>
            </div>
          )}
          <BiLogOut className="log_out" />
        </div>
      )}
      {!props.isOpen && <BiLogOut className="logout navIcon " />}
    </div>
  );
};

export default ProfileItem;
