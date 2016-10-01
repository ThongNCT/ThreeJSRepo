using System;
using System.Collections.Generic;
using ThreeJS.Models;

namespace ThreeJS.DbContextFactory {

    public interface ISampleRepository : IDisposable {
        IEnumerable<Sample> GetObjects();
        Sample GetObjectById(int key);
        Sample AddObject(Sample newObject);
        void DeleteObject(int objectId);
        Sample UpdateObejct(Sample currentOject);
        void SaveChange();
    }
}