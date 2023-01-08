// import React, { useState } from 'react';

// // import { Button, Col, Dropdown, Image, Layout, Menu, Row } from 'antd';
// import type { MenuProps } from 'antd';
// import {
//   ConsoleSqlOutlined,
//   SecurityScanOutlined,
//   LineChartOutlined,
//   ContactsOutlined,
//   LoginOutlined,
// } from '@ant-design/icons';

import { Navigate, useNavigate } from 'react-router-dom';
// import { Anchor } from 'antd';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import logo_white from '../../assets/png/binary-cosmo-logo.png';
import styles from '../../core-home.module.scss';
// const { Header } = Layout;

// const items: MenuProps['items'] = [
//   {
//     label: 'SQL',
//     key: 'sql',
//     icon: <ConsoleSqlOutlined />,
//   },
//   {
//     label: 'Cyber Security',
//     key: 'cyberSecurity',
//     icon: <SecurityScanOutlined />,
//   },
//   {
//     label: 'BI',
//     key: 'bi',
//     icon: <LineChartOutlined />,
//   },
//   {
//     label: 'Contact Us',
//     key: 'contact',
//     icon: <ContactsOutlined />,
//   },

//   {
//     label: 'Login / Register',
//     key: 'login/register',
//     icon: <ContactsOutlined />,
//     children : [
//       {
//         type: 'group',
//         label: '',
//         children: [
//           {
//             label: 'Login',
//             key: 'login',
//             icon: <LoginOutlined />,
//           },
//           {
//             label: 'Register',
//             key: 'reg',
//             icon: <LoginOutlined />,
//           },
//         ]
//       }
//     ]
//   },

// ];

// const { Link } = Anchor;

export default function HomeHeader() {
  const { isOpen, onToggle } = useDisclosure();

  // const [current, setCurrent] = useState('mail');
  const navigate = useNavigate();

  // const onClick: MenuProps['onClick'] = (e) => {
  //   setCurrent(e.key);
  //   // console.log('l', logo_white.toString());
  //   switch (e.key) {
  //     case 'login':
  //       navigate('/login');
  //       break;

  //     case 'sql':
  //       navigate('/home');
  //       break;

  //     case 'reg':
  //       navigate('/register');
  //       break;

  //     default:
  //       break;
  //   }
  // };

  return (
    // <>
    //   <Header color="#ffffff" className={styles['header']}>
    //     <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    //       <Col className="gutter-row" span={12}>
    //         {/* <div className="logo"> */}
    //         {/* <Avatar
    //               size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
    //               icon={<AntDesignOutlined />}
    //           /> */}
    //         <Link href="/" title="">
    //           <Image
    //           onClick={()=> navigate("/home")}
    //             style={{ padding: '5px', cursor: 'pointer' }}
    //             preview={false}
    //             width={55}
    //             height={55}
    //             src={logo_white}

    //           />
    //           <span className={styles['logo']}>Binary Cosmo</span>
    //         </Link>

    //         {/* </div> */}
    //       </Col>
    //       <Col className="gutter-row" span={12}>
    //         <Menu
    //           onClick={onClick}
    //           theme="light"
    //           color="#f8ebe7"
    //           mode="horizontal"
    //           defaultSelectedKeys={['Sql']}
    //           items={items}
    //         />
    //       </Col>
    //     </Row>
    //   </Header>
    // </>

    <>
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <div className={styles['logo-container']}>
              <img
                onClick={() => {
                  navigate('/home');
                }}
                src={logo_white}
                className={styles['logo-img']}
              />
            </div>

            <Flex
              display={{ base: 'none', md: 'flex' }}
              ml={10}
              style={{ margin: 'auto', marginTop: '0px' }}
            >
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              onClick={() => {
                navigate('/login');
              }}
            >
              Sign In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'blue.400'}
              onClick={() => {
                navigate('/register');
              }}
              _hover={{
                bg: 'blue.300',
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'orange.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'About',
    children: [
      {
        label: 'Our company',
        subLabel: 'find out why Bynary Cosmo is best fit for your needs',
        href: '#',
      },
      {
        label: 'Our courses',
        subLabel: 'Learn more about how to get the most out of Bynary Cosmo',
        href: '#',
      },
    ],
  },
  {
    label: 'Pricing',
    children: [
      {
        label: 'Course',
        subLabel: 'Choose your plan',
        href: '#',
      }
    ],
  },
  {
    label: 'Catalog',
    href: '#',
  },
  {
    label: 'Resources',
    href: '#',
  },
];
