import { useState, useEffect } from "react";
import xhr from "../utils/xhr";

import Box from "../CommonComponents/Box";
import OrganizationListItem from "./OrganizationListItem";
import Button from "../CommonComponents/Button";

export default function () {
  const [orgs, setOrgs] = useState([]);

  const getOrganizations = () => {
    xhr({
      url: "https://api.github.com/organizations?per_page=10",
      method: "GET"
    }).then((res) => {
      setOrgs(res.data);
    });
  };

  useEffect(() => {
    getOrganizations();
  }, []);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" flexDirection="column">
        {orgs.map((org) => (
          <OrganizationListItem
            key={org.id}
            avatarUrl={org.avatar_url}
            orgName={org.login}
            id={org.id}
          />
        ))}
      </Box>
      <Button mt="1rem" variant="primary" title="Get some more..." />
    </Box>
  );
}
