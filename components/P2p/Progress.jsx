import {
  Box,
  Grid,
  GridItem,
  Avatar,
  Flex
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step2Me } from "./Step2Me";
import { useUserContext } from "../../contexts/User";
import { useAccount } from "wagmi";

const steps = [
  { label: "1", description: "Find A User" },
  { label: "2", description: "Request" },
  { label: "3", description: "Offer" },
  { label: "4", description: "Preview & Submit" },
]

export const Progress = ({ callback, handleVerified }) => {

  const bg = useColorModeValue("lightBg.light", "lightBg.dark")
  const header = useColorModeValue("header.light", "header.dark");

  const h = useColorModeValue("placeholder.light", "placeholder.dark");

  const [tab, setTab] = useState(0);
  const { address } = useAccount();
  const userContext = useUserContext();
  const [isUseDust, setIsUseDust] = useState(false);
  const [dustString, setDustString] = useState(false);

  useEffect(() => {
    if (address === undefined) {
      userContext?.dispatchSelectedActions({
        type: "RESET"
      });

      callback()
    } else {
      if (address !== userContext?.selectedActionsState?.p2p_me?.address) {
        userContext?.dispatchSelectedActions({
          type: "HANDLE_P2P_ME",
          payload: {
            ...userContext?.selectedActionsState?.p2p_me,
            ["address"]: address
          },
        });

        userContext?.dispatchSelectedActions({
          type: "HANDLE_P2P_MY_NFT",
          payload: [],
        });
        userContext?.dispatchSelectedActions({
          type: "HANDLE_P2P_MY_FT",
          payload: [],
        });
      } else if (address !== userContext?.selectedActionsState?.p2p_trader?.address) {
        setTab(0);
        userContext?.dispatchSelectedActions({
          type: "RESET"
        });
      }
    }
  }, [address])

  const handleStep = (index, data = false, dustString = false) => {
    if (index === -1) {
      userContext?.dispatchSelectedActions({
        type: "RESET"
      });

      callback()
    } else {
      setTab(index);
    }
    if (index == 2) {
      console.log("index2")
      setIsUseDust(data)
      setDustString(dustString)
    }
  }

  return (
    <>
      <Box w='full' py='74px'>
        <Grid mx='35vh' templateColumns='repeat(3, 1fr)'>
          {new Array(3).fill(0).map((item, index) => {
            return <GridItem key={index} h='12px' bg={(tab <= index) ? bg : 'bluer'} position='relative' sx={{ transition: "all 0.5s ease-in" }}>
              <Box position='absolute' top='-25px' left='-85px' textAlign='center'>
                <Flex
                  display='inline-block'
                  borderRadius='full'
                  bg={tab >= index ? 'bluer' : header}
                  border={`9px solid`}
                  borderColor={(tab <= index) ? bg : 'bluer'}
                  sx={{ transition: "all 0.5s ease-in" }}
                >
                  <Avatar
                    m='auto'
                    name={steps[index].label}
                    bg={tab >= index ? 'bluer' : header}
                    border='none'
                    sx={{ transition: "all 0.5s ease-in" }}
                  />
                </Flex>
                <Box
                  mt='16px'
                  fontSize='16px'
                  px='38px'
                  py='7px'
                  borderRadius='8px'
                  bg={tab <= index ? 'transparent' : 'bluer'}
                  color={tab > index ? 'whiter' : tab === index ? 'bluer' : h}
                  sx={{ transition: "all 0.5s ease-in" }}
                >
                  {steps[index].description}
                </Box>
              </Box>
              {index === 2 &&
                <Box key={4} position='absolute' top='-25px' right='-118px' textAlign='center'>
                  <Flex
                    display='inline-block'
                    borderRadius='full'
                    bg={tab >= (index + 1) ? 'bluer' : header}
                    border={`9px solid`}
                    borderColor={(tab <= index + 1) ? bg : 'bluer'}
                  >
                    <Avatar
                      m='auto'
                      name={steps[index + 1].label}
                      bg={tab >= (index + 1) ? 'bluer' : header}
                      border='none'
                    />
                  </Flex>
                  <Box
                    mt='16px'
                    fontSize='16px'
                    px='38px'
                    py='7px'
                    borderRadius='8px'
                    bg={tab <= index + 1 ? 'transparent' : 'bluer'}
                    color={tab > index + 1 ? 'whiter' : tab === index + 1 ? 'bluer' : h}
                  >
                    {steps[index + 1].description}
                  </Box>
                </Box>
              }
            </GridItem>
          })}
        </Grid>
        {
          tab === 0 ? <Step1 callback={handleStep} /> :
            tab === 2 ? <Step2Me callback={handleStep} handleVerified={handleVerified} isUseDust={isUseDust} dustString={dustString} /> :
              tab === 1 ? <Step2 callback={handleStep} handleVerified={handleVerified} /> :
                tab === 3 ? <Step3 callback={handleStep} handleVerified={handleVerified} isUseDust={isUseDust} dustString={dustString} /> :
                  tab === 4 ? <Step4 callback={handleStep} /> : <></>
        }
      </Box>
    </>
  );
};