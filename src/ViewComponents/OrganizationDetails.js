import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import xhr from "../utils/xhr";

import Box from "../CommonComponents/Box";

export default function OrganizationDetails() {
  const { id } = useParams();
  console.log(id);
  const [organization, setOrganization] = useState({});

  useEffect(() => {
    if (id) {
      xhr({
        url: `https://api.github.com/orgs/${id}`,
        method: "GET"
      }).then((res) => {
        setOrganization(res.data);
      });
    }
  }, [id]);

  return (
    <Box>
      {/* DETAILS PAGE TITLE */}
      <Box as="h2" mb="2rem" display="flex" alignItems="center">
        <Box
          as="img"
          mr="1rem"
          maxWidth="40px"
          maxHeight="40px"
          alt="Organization Avatar"
          src={organization.avatar_url}
        />
        <Box>{organization.login} details:</Box>
      </Box>

      {/* DETAILS CONTENT */}
      <Box>Company: {organization.company}</Box>
      <Box>Git link: {organization.html_url}</Box>
      <Box>location: {organization.location}</Box>
      <Box>Number of Public Repos: {organization.public_repos}</Box>
      <Box>How many followers: {organization.followers}</Box>
      <Box>How many collaborators: {organization.collaborators}</Box>
      <Box>
        Members can fork it:{" "}
        {organization.members_can_fork_private_repositories ? "Yes" : "No"}
      </Box>
    </Box>
  );
}
