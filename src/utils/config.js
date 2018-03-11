'use strict';
import device from 'react-native-device-info'

module.exports = {
  title: '西华师范大学智慧图书馆',//标题
  //登陆参数
  loginModel: {
    ApplicationName: device.getApplicationName(),
    Brand: device.getBrand(),
    BuildNumber: device.getBuildNumber(),
    BundleId: device.getBundleId(),
    Carrier: device.getCarrier(),
    DeviceCountry: device.getDeviceCountry(),
    DeviceId: device.getDeviceId(),
    DeviceLocale: device.getDeviceLocale(),
    DeviceName: device.getDeviceName(),
    FontScale: device.getFontScale(),
    FreeDiskStorage: device.getFreeDiskStorage(),
    UserAgent: device.getUserAgent(),
    Manufacturer: device.getManufacturer(),
    Model: device.getModel(),
    SystemName: device.getSystemName(),
    ReadableVersion: device.getReadableVersion(),
    SystemVersion: device.getSystemVersion(),
    TotalDiskCapacity: device.getTotalDiskCapacity(),
    Timezone: device.getTimezone(),
    TotalMemory: device.getTotalMemory(),
    Version: device.getVersion(),
    UniqueID: device.getUniqueID(),
  },
}