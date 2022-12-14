import React, { useState, useEffect } from "react";

import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

import { Project } from "../../../types";
import { useCountdown } from "../../hooks/useCountDown";
import Frame from "../components/Frame";
import VoteModal from "../components/VoteModal";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [openVoteModal, setOpenVoteModal] = useState<boolean>(false);
  const [project, setProject] = useState<Project | null>(null);
  const [projectId, setProjectId] = useState<number>(0);
  const [days, hours, minutes, seconds] = useCountdown("Dec 5, 2022 15:37:25");

  useEffect(() => {
    setProject(location.state);
  }, []);

  const vote = async (id: any) => {
    if (id && typeof id === "number") {
      setProjectId(id);
      setOpenVoteModal(true);
    }
  };

  return (
    <Frame title="Project Detail">
      <div className="product-detail">
        <div className="goBack" onClick={() => navigate(-1)}>
          {"<<<"}
        </div>
        <div className="content">
          <div className="header-wrapper">
            <div className="header">
              <div className="title">{project?.title}</div>
              <div className="rank">#{project?.rank}</div>
            </div>
            <div className="header">
              <div className="note">By We love Japan Organization</div>
              <div className="expiryTimer">
                <span className="iconify" data-icon="fluent:timer-32-regular"></span>{" "}
                <div className="countdown">
                  Live for {days} more days and {`${hours}:${minutes}:${seconds}`}
                </div>
              </div>
            </div>
          </div>
          <div className="project-body-wrapper">
            <div className="project-body">
              <img className="image" src={project?.image} />
              <div className="detail-breakdown">
                <div className="organization">Organization</div>
                {/* <div className="detail">
                  <img src="assets/images/organisation.png" />
                  <div className="breakdown">
                    <div className="summary">We love Japan Organization </div>
                    <div className="info">
                      We love Japan Organization aim to used blockchain technlog to build a small buiness and promote jp
                      culture xxxxxxxxxxxxxxxxxxxxx......
                    </div>
                    <div className="learn-more">Learn more{">>>"}</div>
                  </div>
                </div> */}
                <div className="breakdown2">
                  <div className="org">We love Japan Organization</div>
                  <div className="org-btns">
                    <Button variant="secondary">
                      <span>
                        <img src="assets/images/global.svg" />
                        Official Website
                      </span>
                    </Button>
                    <Button variant="secondary">
                      <span>
                        <img src="assets/images/youtube.svg" />
                        Youtube
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="obj-backer">
                  <div className="objective">
                    <div className="key">Objective:</div>
                    <div className="value">
                      <img src="assets/images/USDC.svg" /> <span>{project?.objective}</span>
                    </div>
                    <div className="action-btn">
                      <Button variant="danger">Contribute</Button>
                    </div>
                  </div>
                  {/* <span className="iconify" data-icon="fluent:divider-short-20-regular"></span> */}
                  <div className="backer">
                    <div className="key">Number of Backers: : </div>
                    <div className="value">
                      <img src="assets/images/users.svg" /> <span>{project?.backers}</span>
                    </div>
                    <div className="action-btn">
                      <Button variant="success" onClick={() => vote(project?.id)}>
                        Vote Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="info-section">
            <div className="title">Information</div>
            <div className="info-body">
              <p>{project?.info}</p>
              {/* <p>
                We based Gachapon on the vending machines popular in Japan and other Asian countries that dispense
                capsules with toys or other goodies. The name Gachapon (also known as Gashapon) comes from the sounds of
                turning the crank handle (Gacha) and the capsule landing in the tray (pon).
              </p> */}
              {/* <p>
                There have already been many digital versions of Gachapon delivered through mobile apps and in many
                types of video games. Now we have our own, and this one dispenses NFTs. Lots and lots of NFTs.
              </p>
              <p>
                {" "}
                Season One Gachapon NFTs all contain a Chilli Bottle NFT. There are ten thousand of these of varying
                rarity. These NFTs will play a significant role in expanding the Super Ultra arcade. Just hold on to
                them for now
              </p> */}
            </div>
          </div>
          <div className="social-section">
            <div className="title">Share to social media</div>
            <div className="social-icons">
              <a href="#">
                <img src="assets/images/fb.png" />
              </a>
              <a href="#">
                <img src="assets/images/ig.png" />
              </a>
              <a href="#">
                <img src="assets/images/tg.png" />
              </a>
              <a href="#">
                <img src="assets/images/tw.png" />
              </a>
              <a href="#">
                <img src="assets/images/discord.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <VoteModal isModalOpen={openVoteModal} setIsModalOpen={setOpenVoteModal} projectId={projectId} />
    </Frame>
  );
};

export default ProjectDetails;
