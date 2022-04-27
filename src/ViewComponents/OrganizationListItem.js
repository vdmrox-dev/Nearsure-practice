import Box from "../CommonComponents/Box";
import { Link } from "react-router-dom";

export default function OrganizationListItem({ avatarUrl, orgName, id }) {
  return (
    <Link to={`/details/${id}`}>
      <Box
        display="flex"
        alignItems="center"
        my="0.4rem"
        py="0.4rem"
        px="0.8rem"
        border="1px solid #f0f0f0"
        width="600px"
      >
        <Box
          mr="1rem"
          as="img"
          maxWidth="32px"
          maxHeight="32px"
          alt="Organization Avatar"
          src={avatarUrl}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          flex="1"
        >
          <Box fontSize="1.2rem" as="h2" fontWeight="400">
            {orgName}
          </Box>
        </Box>
        <Box fontSize="0.7rem" color="#424242">
          Click for details...
        </Box>
      </Box>
    </Link>
  );
}
