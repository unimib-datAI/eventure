import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { router } from 'expo-router';
import { Mail, Eye, EyeOff } from 'lucide-react-native'; 

interface LoginScreenProps {
  navigation: NavigationProp<any>;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [username, setUsername] = useState('Aurora');
  const [password, setPassword] = useState('Federer');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.push('/(tabs)');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className='flex-1 bg-white px-4 items-center justify-center'>
      <Text className='text-2xl font-bold text-[#141D19] mb-[65px]'>Riprendi ad esplorare la città!</Text>


      <View className="flex-row items-center border border-gray-300 rounded-lg mb-2.5 w-[90%]">
        <TextInput
          className="p-3 flex-1"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Mail size={20} color="#141D19" style={{ marginRight: 10 }} />
      </View>


      <View className="flex-row items-center border border-gray-300 rounded-lg w-[90%]">
        <TextInput
          className="p-3 flex-1"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          {showPassword ? (
            <EyeOff size={20} color="#141D19" style={{ marginRight: 10 }} />
          ) : (
            <Eye size={20} color="#141D19" style={{ marginRight: 10 }} />
          )}
        </TouchableOpacity>
      </View>


      <Text className='text-right text-sm font-light underline text-forest w-[90%] mt-2'>
        Hai dimenticato la password?
      </Text>


      <TouchableOpacity
        className="bg-forest rounded-xl p-3 border-[1px] border-[#141D19] mt-14 w-[80%]"
        onPress={handleLogin}
      >
        <Text className="text-base text-center font-medium text-[#FFFDFA]">
          accedi
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;