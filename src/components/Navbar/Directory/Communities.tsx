import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import React from 'react';
import CreateCommunityModal from '../../Modal/CreateCommunity/CreateCommunityModal';
import { GrAdd } from 'react-icons/gr';

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  return (
    <>
      <CreateCommunityModal />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: 'gray.100' }}
        onClick={() => {}}>
        <Flex align="center">
          <Icon fontSize={20} mr={2} as={GrAdd} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
